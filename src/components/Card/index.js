import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { CardButton, CardText } from './styles';

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
