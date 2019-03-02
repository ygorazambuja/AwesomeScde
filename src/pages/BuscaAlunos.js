import React, { Component } from 'react';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Aluno from '../components/Aluno';
import api from '../services/api';
import { FlatList, Dimensions, Text } from 'react-native';
const { height } = Dimensions.get('window');
export default class BuscaAlunos extends Component {
  static navigationOptions = {
    header: null,
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  state = {
    // alunos: [
    //   { _id: 1, nome: 'ID1 Correa Azambuja' },
    //   { _id: 2, nome: 'ID2 Martins Lopes' },
    //   { _id: 3, nome: 'ID3 da Silva Sauro' },
    //   { _id: 4, nome: 'ID4 Correa Azambuja' },
    //   { _id: 5, nome: 'ID5 Martins Lopes' },
    //   { _id: 6, nome: 'ID6 da Silva Sauro' },
    //   { _id: 7, nome: 'ID7 Correa Azambuja' },
    //   { _id: 8, nome: 'ID8 Martins Lopes' },
    //   { _id: 9, nome: 'ID9 da Silva Sauro' },
    //   { _id: 10, nome: 'ID10 da Silva Sauro' },
    //   { _id: 11, nome: 'ID11 da Silva Sauro' },
    //   { _id: 12, nome: 'ID1 Correa Azambuja' },
    //   { _id: 12, nome: 'ID2 Martins Lopes' },
    //   { _id: 13, nome: 'ID3 da Silva Sauro' },
    //   { _id: 14, nome: 'ID4 Correa Azambuja' },
    //   { _id: 15, nome: 'ID5 Martins Lopes' },
    //   { _id: 16, nome: 'ID6 da Silva Sauro' },
    //   { _id: 17, nome: 'ID7 Correa Azambuja' },
    //   { _id: 18, nome: 'ID8 Martins Lopes' },
    //   { _id: 19, nome: 'ID9 da Silva Sauro' },
    //   { _id: 20, nome: 'ID10 da Silva Sauro' },
    //   { _id: 21, nome: 'ID11 da Silva Sauro' },
    // ],
    alunos: [],
    termoBusca: '',
    nome: '',
  };
  handleBackButton = () => {
    this.props.navigation.navigate('Home');
  };

  componentDidMount = async () => {
    const alunos = await api.get('/alunos');
    this.setState({ alunos: alunos.data });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;

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
        <TableContainer scrollEnabled={scrollEnabled}>
          <FlatList
            data={dadosFiltrados}
            renderItem={({ item }) => {
              return <Aluno aluno={item} />;
            }}
            keyExtractor={(item, i) => String(i)}
            maxToRenderPerBatch={10}
          />
        </TableContainer>
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
  color: white;
  font-size: 25px;
`;

const InputCard = styled.TextInput`
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  margin: 2%;
  text-align: center;
  font-family: 'FiraCode-Regular';
  font-size: 16px;
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
