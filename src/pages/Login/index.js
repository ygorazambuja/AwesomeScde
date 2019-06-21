import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Content,
  Input,
  Button,
  ButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    login: '',
    password: '',
  };

  componentDidMount = async () => {
    this.fetchDataFromAsyncStorage();
  };

  fetchDataFromAsyncStorage = async () => {
    const loginData = await AsyncStorage.getItem('@awesomescde:loginData');
    const login = JSON.parse(loginData);
    if (login) this.props.navigation.navigate('Home');
  };

  handleTextChange = login => {
    this.setState({ login });
  };
  handlePasswordChange = password => {
    this.setState({ password });
  };
  handleSubmit = async () => {
    const { login, password } = this.state;
    const response = await api.post('/authenticateUser', { username: login, password: password });

    if (!response.data.token) {
      Alert.alert('Algum problema no Login', ['Verifique seu usuario e senha novamente']);
    } else {
      AsyncStorage.setItem('@awesomescde:loginData', JSON.stringify(response.data.user));
      AsyncStorage.setItem('@awesomescde:token', JSON.stringify(response.data.token));
      this.props.navigation.navigate('Home');
    }
  };
  render() {
    return (
      <Container>
        <Header>
          <HeaderTitle>SCDE</HeaderTitle>
          <HeaderSubtitle>Sistema de Consulta de Dados Escolares</HeaderSubtitle>
        </Header>

        <Content>
          <Input
            placeholder="Login"
            value={this.state.login}
            onChangeText={this.handleTextChange}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry={true}
          />

          <View>
            <Button onPress={this.handleSubmit}>
              <Icon name="check" size={20} style={{ color: '#FFFFFF' }} />
              <ButtonText>Entrar</ButtonText>
            </Button>
          </View>
          <Content style={{ justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Icon name="plus" size={20} />
              <Text>Não tem Cadastro ? </Text>
            </TouchableOpacity>
          </Content>
        </Content>
      </Container>
    );
  }
}
