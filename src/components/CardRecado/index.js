import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Card,
  CardAuthor,
  CardContent,
  CardDate,
  CardIcon,
  CardIcons,
  CardStatus,
  CardTime,
} from './styles';

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
