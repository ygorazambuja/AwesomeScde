import styled from 'styled-components';

export const Container = styled.View`
  background-color: #f2b632;
  height: 100%;
`;

export const Header = styled.View`
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

export const HeaderText = styled.Text`
  font-family: 'Monoton-Regular';
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  font-size: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  margin-right: 20%;
`;

export const ScrollContainer = styled.ScrollView`
  background-color: #f2b632;
  height: 100%;
`;

export const InputCard = styled.TextInput`
  padding: 10px;
  text-align: center;
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  flex-direction: row;
  flex-grow: 2;
  margin: 10px;
`;

export const InputGroup = styled.View`
  margin-top: 10px;
  border-radius: 25px;
  background-color: white;
  flex-direction: row;
  height: 60px;
`;

export const InputSendButton = styled.TouchableOpacity`
  background-color: #0e174d;
  border: solid 1px;
  border-radius: 25px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
