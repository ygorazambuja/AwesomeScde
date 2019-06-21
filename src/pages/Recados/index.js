import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import socket from 'socket.io-client';
import { Text } from 'react-native';
import CardRecado from '../../components/CardRecado';
import api from '../../services/api.js';
import {
  Header,
  BackButton,
  Container,
  HeaderText,
  InputCard,
  InputGroup,
  InputSendButton,
  ScrollContainer,
} from './styles';

import AsyncStorage from '@react-native-community/async-storage';
export default class Recados extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    recados: [],
    content: '',
    username: '',
  };

  componentDidMount = () => {
    this.fetchData();
    this.subscribeToEvents();
    this.fetchUserFromAsyncStorage();
  };
  fetchData = async () => {
    const response = await api.get('/recados');
    const recados = response.data;
    this.setState({ recados: recados });
  };

  fetchUserFromAsyncStorage = async () => {
    const loginData = await AsyncStorage.getItem('@awesomescde:loginData');
    const { username } = JSON.parse(loginData);
    console.log(username);
    this.setState({ username });
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
      author: this.state.username,
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
