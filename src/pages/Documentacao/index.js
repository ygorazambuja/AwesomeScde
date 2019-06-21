import React, { Component } from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

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
const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  margin-right: 20%;
`;
const HeaderText = styled.Text`
  font-family: 'Monoton-Regular';
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  font-size: 25px;
`;
