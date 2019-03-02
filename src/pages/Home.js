import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';

export default class Home extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    this.props.navigation.navigate('BuscaAlunos');
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

const Container = styled.View`
  background-color: #f2b632;
  height: 100%;
`;

const Header = styled.View`
  background-color: #0e174d;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const BottomText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  text-align: right;
  padding-right: 10px;
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
