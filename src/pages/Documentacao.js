import React, { Component } from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { Container, Header, BackButton, HeaderText } from './styles';

export default class Documentacao extends Component {
  static navigationOptions = {
    header: null,
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
          <HeaderText>Documentação</HeaderText>
        </Header>
      </Container>
    );
  }
}
