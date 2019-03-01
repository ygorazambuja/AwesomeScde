import React, { PureComponent } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Home extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  handleDocPress = () => {
    this.props.navigation.navigate('Documentacao');
  };
  handleBuscaPress = () => {
    this.props.navigation.navigate('BuscaAlunos');
  };

  handleRecadosPress = () => {
    this.props.navigation.navigate('Recados');
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <Container>
          <Header>
            <Text
              style={{ fontSize: 30, color: 'white', fontFamily: 'Monoton-Regular' }}
            >{`{SCDE}`}</Text>
            <Text style={{ fontSize: 10, color: 'white', fontFamily: 'FiraCode-Regular' }}>
              Sistema de Consulta de Dados Escolares
            </Text>
          </Header>

          <Card onPress={this.handleBuscaPress}>
            <Icon name="searchengin" size={94} style={{ color: '#f2b632' }} />
            <CardText>Busca Alunos</CardText>
          </Card>
          <Card onPress={this.handleDocPress}>
            <Icon name="id-card" size={94} style={{ color: '#f2b632' }} />

            <CardText>Documentação</CardText>
          </Card>
          <Card onPress={this.handleRecadosPress}>
            <Icon
              name="sticky-note"
              size={94}
              style={{ color: '#f2b632', fontFamily: 'FiraCode-Regular' }}
            />
            <CardText>Recados</CardText>
          </Card>
          <View>
            <BottomText>
              made with <Ionicons name="ios-heart" color="red" />
            </BottomText>
          </View>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const Card = styled.TouchableOpacity`
  background-color: white;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 70%;
  height: 25%;
  border-radius: 25px;
  margin-top: 4%;
`;

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

const Button = styled.TouchableOpacity`
  border: 1px solid;
`;

const CardText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 20px;
`;
const BottomText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  text-align: right;
  padding-right: 10px;
`;
