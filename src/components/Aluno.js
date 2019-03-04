import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

export default class Aluno extends PureComponent {
  render() {
    const { aluno } = this.props;
    return (
      <Container>
        <Button onPress={() => this.props.navigation.navigate('Detalhes', { aluno })}>
          <ButtonText>{aluno.nome}</ButtonText>
        </Button>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 25px;
`;
const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'FiraCode-Regular';
  padding: 10px;
  text-align: center;
`;
