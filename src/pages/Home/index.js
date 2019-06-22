import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import {
  BottomText,
  Container,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  BackButton,
  HeaderIcon,
} from './styles';

import AsyncStorage from '@react-native-community/async-storage';
export default class Home extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  handleBackButton = async () => {

    AsyncStorage.removeItem('@awesomescde:loginData');
    AsyncStorage.removeItem('@awesomescde:token');

    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <Container>
        <Header>
          <HeaderIcon>
            <BackButton onPress={this.handleBackButton}>
              <Ionicons name="md-arrow-round-back" color="white" size={20} />
            </BackButton>
          </HeaderIcon>
          <View style={{ flexDirection: 'column' }}>
            <HeaderTitle style={{ textAlign: 'center' }}>SCDE</HeaderTitle>
            <HeaderSubtitle>Sistema de consulta de dados escolares</HeaderSubtitle>
          </View>
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
    );
  }
}
