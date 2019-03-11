import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import socket from 'socket.io-client';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import CardRecado from '../components/CardRecado';
import api from '../services/api.js';

console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

export default class Recados extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    recados: [],
    content: '',
  };

  componentDidMount = () => {
    this.fetchData();
    this.subscribeToEvents();
  };
  fetchData = async () => {
    const response = await api.get('/recados');
    const recados = response.data;
    this.setState({ recados: recados });
  };

  subscribeToEvents = () => {
    const io = socket('https://api-backend-scde.herokuapp.com/');
    io.on('recado', data => {
      this.setState({ recados: [data, ...this.state.recados] });
    });
  };
  handleBackButton = () => {
    this.props.navigation.navigate('Home');
  };

  handleSendRecado = async () => {
    const recado = {
      author: 'Ygor Azambuja',
      content: this.state.content,
    };
    await api.post('/recado', recado);
    this.setState({ content: '' });
  };

  render() {
    return (
      <Container>
        <Header>
          <BackButton onPress={this.handleBackButton}>
            <Ionicon name="md-arrow-round-back" color="white" size={20} />
          </BackButton>
          <HeaderText>Recados</HeaderText>
        </Header>

        <InputGroup>
          <InputCard
            placeholder="Deixe aqui seu Recado"
            value={this.state.content}
            onChangeText={content => this.setState({ content })}
          />
          <InputSendButton onPress={this.handleSendRecado}>
            <Text style={{ color: 'white', textAlign: 'center', alignItems: 'baseline' }}>
              Enviar
            </Text>
          </InputSendButton>
        </InputGroup>

        <ScrollContainer>
          {this.state.recados.map(recado => (
            <CardRecado recado={recado} key={recado._id} />
          ))}
        </ScrollContainer>
      </Container>
    );
  }
}
const Container = styled.View`
  background-color: #f2b632;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #0e174d;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 8px;
  max-height: 20%;
  width: 100%;
`;

const HeaderText = styled.Text`
  font-family: 'Monoton-Regular';
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  font-size: 25px;
`;

const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  margin-right: 20%;
`;

const TableContainer = styled.ScrollView`
  display: flex;
  padding: 5px;
  background-color: white;
  margin: auto;
  width: 94%;
  height: 70%;
  border-radius: 25px;
  flex-grow: 1;
`;

const HeaderTitle = styled.Text`
  font-size: 30;
  color: white;
  font-family: 'Monoton-Regular';
`;
const HeaderSubtitle = styled.Text`
  font-size: 10;
  color: white;
  font-family: 'FiraCode-Regular';
`;

const ScrollContainer = styled.ScrollView`
  background-color: #f2b632;
  height: 100%;
`;

const InputCard = styled.TextInput`
  padding: 10px;
  text-align: center;
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  flex-direction: row;
  flex-grow: 2;
  margin: 10px;
`;

const InputGroup = styled.View`
  margin-top: 10px;
  border-radius: 25px;
  background-color: white;
  flex-direction: row;
  height: 60px;
`;

const InputSendButton = styled.TouchableOpacity`
  background-color: #0e174d;
  border: solid 1px;
  border-radius: 25px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
