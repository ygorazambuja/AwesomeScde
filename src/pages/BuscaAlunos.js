import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Aluno from '../components/Aluno';
import api from '../services/api';
import { FlatList } from 'react-native';

import { Container, Header, HeaderText, InputCard, BackButton, TableContainer } from './styles';

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

  componentDidMount = async () => {};

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
          />
        </TableContainer>
      </Container>
    );
  }
}
