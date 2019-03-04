import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import api from '../services/api';
import { AsyncStorage } from 'react-native';
import { Container, BottomText, HeaderTitle, HeaderSubtitle } from './styles';
export default class Home extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    alunos: [],
  };

  componentDidMount = () => {
    this.props.navigation.navigate('Recados');
  };

  render() {
    return (
      <View>
        <Container>
          <Header>
            <HeaderTitle>{`{SCDE}`}</HeaderTitle>
            <HeaderSubtitle>Sistema de Consulta de Dados Escolares</HeaderSubtitle>
          </Header>

          <Card
            route="BuscaAlunos"
            text="Busca Alunos"
            icon="searchengin"
            navigation={this.props.navigation}
          />
          <Card
            route="Documentacao"
            text="Documentação"
            icon="id-card"
            navigation={this.props.navigation}
          />
          <Card
            route="Recados"
            text="Recados"
            icon="sticky-note"
            navigation={this.props.navigation}
          />

          <View>
            <BottomText>
              made with <Ionicons name="ios-heart" color="red" />
            </BottomText>
          </View>
        </Container>
      </View>
    );
  }
}

const Header = styled.View`
  background-color: #0e174d;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
