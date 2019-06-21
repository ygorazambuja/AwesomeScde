import styled from 'styled-components';

export const Header = styled.View`
  background-color: #0e174d;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 5px;
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

export const Content = styled.View`
  flex: 1;
  background-color: #f2b632;
  /* justify-content: center; */
  margin: auto;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  min-width: 50%;
  margin-top: 18px;
  padding: 15px;
  border-radius: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0e174d;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
