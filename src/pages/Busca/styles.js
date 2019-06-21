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

export const InputCard = styled.TextInput`
  text-align: center;
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  flex-direction: row;
  background-color: white;
  border-radius: 25px;
  margin: 10px;
`;
export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  margin-right: 20%;
`;
export const TableContainer = styled.ScrollView`
  display: flex;
  background-color: white;
  margin: auto;
  width: 94%;
  height: 70%;
  border-radius: 25px;
  flex-grow: 1;
`;
