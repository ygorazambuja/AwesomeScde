import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  BackButton,
  Container,
  Header,
  HeaderText,
  TableAno,
  TableContainer,
  TableSerie,
  TableSubContainer,
  TableTop,
} from './styles';

export default class Detalhes extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    aluno: this.props.navigation.getParam('aluno'),
  };

  handleBackButton = () => this.props.navigation.navigate('BuscaAlunos');

  render() {
    return (
      <Container>
        <Header>
          <BackButton onPress={this.handleBackButton}>
            <Ionicon name="md-arrow-round-back" color="white" size={20} />
          </BackButton>
          <HeaderText>Detalhes</HeaderText>
        </Header>
        <TableContainer style={{ backgroundColor: 'white' }}>
          <TableTop>
            <HeaderText
              style={{
                color: 'black',
                fontFamily: 'FiraCode-Regular',
                fontSize: 15,
              }}
            >
              {this.state.aluno.nome}
            </HeaderText>
          </TableTop>
          <TableSubContainer>
            <TableSerie>
              <HeaderText
                style={{
                  color: 'black',
                  fontFamily: 'FiraCode-Regular',
                }}
              >
                Serie
              </HeaderText>
              <Text style={{ fontFamily: 'FiraCode-Regular' }}>{this.state.aluno.serie}</Text>
            </TableSerie>
            <TableAno>
              <HeaderText
                style={{
                  color: 'black',
                  fontFamily: 'FiraCode-Regular',
                }}
              >
                Ano
              </HeaderText>
              <Text style={{ fontFamily: 'FiraCode-Regular' }}>{this.state.aluno.ano}</Text>
            </TableAno>
          </TableSubContainer>
        </TableContainer>
      </Container>
    );
  }
}
