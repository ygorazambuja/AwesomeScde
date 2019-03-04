import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

export default class Detalhes extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    aluno: this.props.navigation.getParam('aluno'),
  };

  render() {
    return (
      <View>
        <Text> Detalhes > {this.state.aluno.nome} </Text>
      </View>
    );
  }
}

