import styled from 'styled-components';

export const Card = styled.View`
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
export const CardAuthor = styled.Text`
  font-family: 'FiraCode-Regular';
  font-size: 10px;
  padding-top: 5px;
  margin-top: 12px;
  margin-right: 60%;
`;
export const CardContent = styled.Text`
  font-family: 'FiraCode-Regular';
  padding: 5%;
`;
export const CardIcon = styled.TouchableOpacity`
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
`;
export const CardIcons = styled.View`
  flex-direction: row;
`;
export const CardStatus = styled.View`
  flex-direction: row;
`;
export const CardDate = styled.Text`
  margin-left: 20%;
  margin-right: 20%;
  padding: 10px;
  font-size: 8px;
  font-family: 'FiraCode-Regular';
  margin-bottom: 4%;
`;
export const CardTime = styled.Text`
  margin-left: 20%;
  margin-right: 20%;
  padding: 10px;
  font-size: 8px;
  font-family: 'FiraCode-Regular';
  margin-bottom: 4%;
`;
