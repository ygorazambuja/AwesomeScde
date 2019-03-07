import styled from 'styled-components/native';

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

export const TableContainer = styled.ScrollView`
  display: flex;
  padding: 5px;
  background-color: white;
  margin: auto;
  width: 94%;
  height: 70%;
  border-radius: 25px;
  flex-grow: 1;
`;
export const BottomText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  text-align: right;
  padding-right: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30;
  color: white;
  font-family: 'Monoton-Regular';
`;
export const HeaderSubtitle = styled.Text`
  font-size: 10;
  color: white;
  font-family: 'FiraCode-Regular';
`;

export const ScrollContainer = styled.ScrollView`
  background-color: #f2b632;
  height: 100%;
`;

export const InputCard = styled.TextInput`
  padding: 10px;
  margin-right: 30%;
  text-align: center;
  font-family: 'FiraCode-Regular';
  font-size: 10px;
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
`;
