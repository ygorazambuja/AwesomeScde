import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CardRecado extends PureComponent {
  render() {
    const { recado } = this.props;

    const date = new Date(recado.createAt);

    return (
      <Card>
        <CardAuthor>{recado.author}</CardAuthor>
        <CardContent>{recado.content}</CardContent>
        <CardIcons>
          <CardIcon>
            <Icon name="thumbs-up" size={20} color="#f2b632" />
          </CardIcon>
          <CardIcon>
            <Icon name="thumbs-down" size={20} color="#f2b632" />
          </CardIcon>
        </CardIcons>
        <CardStatus>
          <CardDate>
            Postado :
            {` ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
          </CardDate>
          <CardTime>
as :
            {` ${date.getHours()}:${date.getMinutes()}`}
          </CardTime>
        </CardStatus>
      </Card>
    );
  }
}

const Card = styled.View`
  display: flex;
  margin-top: 20px;
  margin-left: 6%;
  margin-right: 6%;
  width: 88%;
  background-color: white;
  border-radius: 25px;
  max-height: 35%;
  justify-content: center;
  align-items: center;
`;
const CardAuthor = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  padding-top: 5px;
  margin-top: 12px;
  margin-right: 60%;
`;
const CardContent = styled.Text`
  font-family: 'FiraCode-Regular';
  padding: 5%;
`;
const CardIcon = styled.TouchableOpacity`
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
`;
const CardIcons = styled.View`
  flex-direction: row;
`;
const CardStatus = styled.View`
  flex-direction: row;
`;
const CardDate = styled.Text`
  margin-left: 20%;
  margin-right: 20%;
  padding: 10px;
  font-size: 8px;
  font-family: 'FiraCode-Regular';
  margin-bottom: 4%;
`;
const CardTime = styled.Text`
  margin-left: 20%;
  margin-right: 20%;
  padding: 10px;
  font-size: 8px;
  font-family: 'FiraCode-Regular';
  margin-bottom: 4%;
`;
