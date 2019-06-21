import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Aluno from '../../components/Aluno';
import { FlatList } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Header, BackButton, HeaderText, InputCard, TableContainer } from './styles';

export default class BuscaAlunos extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    alunos: [],
    termoBusca: '',
    nome: '',
  };
  handleBackButton = () => {
    this.props.navigation.navigate('Home');
  };

  componentDidMount = async () => {
    this.fetchDataFromAsyncStorage();
    // this.fetchDataFromApi();
  };

  fetchDataFromApi = async () => {
    const response = await api.get('https://api-backend-scde.herokuapp.com/alunos');
    this.setState({ alunos: response.data });

    AsyncStorage.setItem('@awesomescde:alunos', JSON.stringify(this.state.alunos));
  };

  fetchDataFromAsyncStorage = async () => {
    const response = await AsyncStorage.getItem('@awesomescde:alunos');
    if (response) {
      this.setState({ alunos: JSON.parse(response) });
    } else {
      this.fetchDataFromApi();
    }
  };

  render() {
    const { alunos } = this.state;
    const { nome } = this.state;

    const dadosFiltrados = alunos.filter(aluno => {
      const regex = new RegExp(nome, 'gi');
      return regex.test(aluno.nome);
    });

    return (
      <Container>
        <Header>
          <BackButton onPress={this.handleBackButton}>
            <Ionicon name="md-arrow-round-back" color="white" size={20} />
          </BackButton>
          <HeaderText>Buscar Alunos</HeaderText>
        </Header>
        <InputCard placeholder="Pesquise Aqui ..." onChangeText={nome => this.setState({ nome })} />
        <TableContainer>
          <FlatList
            data={dadosFiltrados}
            renderItem={({ item }) => <Aluno aluno={item} navigation={this.props.navigation} />}
            keyExtractor={(item, i) => String(i)}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
          />
        </TableContainer>
      </Container>
    );
  }
}
