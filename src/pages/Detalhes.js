import React, { PureComponent } from "react";
import { Text } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import styled from "styled-components";

export default class Detalhes extends PureComponent {
    static navigationOptions = {
        header: null
    };

    state = {
        aluno: this.props.navigation.getParam("aluno")
    };

    handleBackButton = () => this.props.navigation.navigate("BuscaAlunos");

    render() {
        return (
            <Container>
                <Header>
                    <BackButton onPress={this.handleBackButton}>
                        <Ionicon
                            name="md-arrow-round-back"
                            color="white"
                            size={20}
                        />
                    </BackButton>
                    <HeaderText>Detalhes</HeaderText>
                </Header>
                <TableContainer style={{ backgroundColor: "white" }}>
                    <TableTop>
                        <HeaderText
                            style={{
                                color: "black",
                                fontFamily: "FiraCode-Regular",
                                fontSize: 15
                            }}
                        >
                            {this.state.aluno.nome}
                        </HeaderText>
                    </TableTop>
                    <TableSubContainer>
                        <TableSerie>
                            <HeaderText
                                style={{
                                    color: "black",
                                    fontFamily: "FiraCode-Regular"
                                }}
                            >
                                Serie
                            </HeaderText>
                            <Text style={{ fontFamily: "FiraCode-Regular" }}>
                                {this.state.aluno.serie}
                            </Text>
                        </TableSerie>
                        <TableAno>
                            <HeaderText
                                style={{
                                    color: "black",
                                    fontFamily: "FiraCode-Regular"
                                }}
                            >
                                Ano
                            </HeaderText>
                            <Text style={{ fontFamily: "FiraCode-Regular" }}>
                                {this.state.aluno.ano}
                            </Text>
                        </TableAno>
                    </TableSubContainer>
                </TableContainer>
            </Container>
        );
    }
}

const Container = styled.View`
    background-color: #f2b632;
    height: 100%;
    width: 100%;
`;

const Header = styled.View`
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

const HeaderText = styled.Text`
    font-family: "Monoton-Regular";
    flex-direction: row;
    justify-content: flex-end;
    color: white;
    font-size: 25px;
    margin-top: 20px;
`;

const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px;
    margin-right: 20%;
`;

const TableContainer = styled.View`
    display: flex;
    background-color: white;
    width: 80%;
    max-height: 75%;
    margin: auto;
    border-radius: 25px;
    flex-grow: 1;
`;
const TableTop = styled.View`
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const TableSubContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
const TableSerie = styled.View`
    margin-top: 20%;
    margin-left: 25%;
    padding: 30px;
    text-align: center;
`;
const TableAno = styled.View`
    margin-top: 20%;
    text-align: center;
    margin-right: 25%;
    padding: 30px;
`;
