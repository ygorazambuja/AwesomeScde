import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Header, Container, BackButton, HeaderText, InputCard, ScrollContainer } from './styles';
import styled from 'styled-components';
import CardRecado from '../components/CardRecado';
export default class Recados extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    recado: {
      author: 'Ygor Azambuja',
      content: 'Deixando recado para os Amigos',
      date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    },
  };

  handleBackButton = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <Container>
        <Header>
          <BackButton onPress={this.handleBackButton}>
            <Ionicon name="md-arrow-round-back" color="white" size={20} />
          </BackButton>
          <HeaderText>Recados</HeaderText>
        </Header>
        <InputCard placeholder="Deixe aqui seu Recado" />
        <ScrollContainer>
          <CardRecado recado={this.state.recado} />
          <CardRecado recado={this.state.recado} />
          <CardRecado recado={this.state.recado} />
          <CardRecado recado={this.state.recado} />
          <CardRecado recado={this.state.recado} />
        </ScrollContainer>
      </Container>
    );
  }
}
