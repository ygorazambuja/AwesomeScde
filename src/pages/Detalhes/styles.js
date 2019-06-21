import styled from 'styled-components';

export const Container = styled.View`
  background-color: #f2b632;
  height: 100%;
  width: 100%;
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
  margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  margin-right: 20%;
`;

export const TableContainer = styled.View`
  display: flex;
  background-color: white;
  width: 80%;
  max-height: 75%;
  margin: auto;
  border-radius: 25px;
  flex-grow: 1;
`;
export const TableTop = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const TableSubContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const TableSerie = styled.View`
  margin-top: 20%;
  margin-left: 25%;
  padding: 30px;
  text-align: center;
`;
export const TableAno = styled.View`
  margin-top: 20%;
  text-align: center;
  margin-right: 25%;
  padding: 30px;
`;
