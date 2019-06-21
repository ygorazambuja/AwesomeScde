import React, { Component } from 'react';
import api from '../../services/api';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Input,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  Button,
  ButtonText,
} from './styles';

export default class Cadastro extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };

  handleSubmit = () => {
    const { username, password, confirmPassword, email } = this.state;
    api
      .post('/user', { username, password, confirmPassword, email })
      .then(result => {
        if (result.data._id) {
          api.post('/authenticateUser', { username, password }).then(result => {
            AsyncStorage.setItem('@awesomescde:loginData', JSON.stringify(result.data.user));
            AsyncStorage.setItem('@awesomescde:token', JSON.stringify(result.data.token));
            this.props.navigation.navigate('Home');
          });
        }
      })
      .catch(_ => {});
  };

  render() {
    return (
      <View>
        <Header>
          <HeaderTitle>Cadastro</HeaderTitle>
          <HeaderSubtitle>Solicite seu cadastro!</HeaderSubtitle>
        </Header>
        <Container>
          <Input
            placeholder="Email: "
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email });
            }}
          />
          <Input
            placeholder="Nome de Usuario: "
            value={this.state.username}
            onChangeText={username => {
              this.setState({ username });
            }}
          />
          <Input
            placeholder="Senha: "
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password });
            }}
            secureTextEntry={true}
          />
          <Input
            placeholder="Confirme a Senha: "
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => {
              this.setState({ confirmPassword });
            }}
            secureTextEntry={true}
          />
          <Button onPress={this.handleSubmit}>
            <ButtonText> Solicitar !</ButtonText>
          </Button>
        </Container>
      </View>
    );
  }
}
