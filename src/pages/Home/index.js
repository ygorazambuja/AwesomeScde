import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import { BottomText, Container, Header, HeaderSubtitle, HeaderTitle } from './styles';

export default class Home extends PureComponent {
  static navigationOptions = {
    header: null,
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
