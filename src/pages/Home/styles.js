import styled from 'styled-components';

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #0e174d;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 8px;
  max-height: 20%;
  width: 100%;
`;

export const BottomText = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  text-align: right;
  padding-right: 10px;
`;

export const Container = styled.View`
  background-color: #f2b632;
  height: 100%;
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
export const HeaderIcon = styled.View``;

export const BackButton = styled.TouchableOpacity``;
export const HeaderText = styled.Text`
  font-family: 'Monoton-Regular';
  justify-content: flex-end;
  color: white;
  font-size: 25px;
`;
