import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  Header,
  Container,
  BackButton,
  HeaderText,
  InputCard,
  ScrollContainer,
  InputGroup,
  InputSendButton,
} from './styles';
import { Text } from 'react-native';
import CardRecado from '../components/CardRecado';
import api from '../services/api.js';

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
  };
  fetchData = async () => {
    const response = await api.get('/recados');
    const recados = response.data;
    this.setState({ recados: recados });
  };

  handleContentChange = () => {
    this.setState({});
  };

  handleBackButton = () => {
    this.props.navigation.navigate('Home');
  };

  handleSendRecado = async () => {
    const author = 'Ygor Azambuja';

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
