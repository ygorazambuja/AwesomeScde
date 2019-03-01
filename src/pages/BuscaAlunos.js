import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BuscaAlunos extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <Text> Busca Alunos </Text>
      </View>
    );
  }
}
