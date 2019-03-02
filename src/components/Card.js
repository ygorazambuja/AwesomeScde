import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Card extends PureComponent {
  render() {
    const { icon } = this.props;
    const { text } = this.props;
    const { route } = this.props;
    const { navigation } = this.props;

    return (
      <CardButton onPress={() => navigation.navigate(`${route}`)}>
        <Icon name={icon} size={94} style={{ color: '#f2b632' }} />
        <CardText>{text}</CardText>
      </CardButton>
    );
  }
}

const CardButton = styled.TouchableOpacity`
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

const CardText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 20px;
`;
