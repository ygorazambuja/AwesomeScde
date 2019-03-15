import React, { Component } from "react";
import Ionicon from "react-native-vector-icons/Ionicons";
import Aluno from "../components/Aluno";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import api from "../services/api";

export default class BuscaAlunos extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        alunos: [],
        termoBusca: "",
        nome: ""
    };
    handleBackButton = () => {
        this.props.navigation.navigate("Home");
    };

    componentDidMount = async () => {
        // this.fetchData();

        const alunosTemp = [
            { nome: "João", serie: "2º Ano", ano: 1999 },
            { nome: "Mateus", serie: "2º Ano", ano: 1999 },
            { nome: "Diego", serie: "2º Ano", ano: 1999 },
            { nome: "Izaque", serie: "2º Ano", ano: 1999 },
            { nome: "Judas", serie: "2º Ano", ano: 1999 },
            { nome: "Tiago", serie: "2º Ano", ano: 1999 },
            { nome: "José", serie: "2º Ano", ano: 1999 },
            { nome: "Pedro", serie: "2º Ano", ano: 1999 },
            { nome: "Marcos", serie: "2º Ano", ano: 1999 }
        ];

        // this.setState({ alunos: alunosTemp });
        this.fetchData();
    };
    fetchData = async () => {
        const response = await api.get(
            "https://api-backend-scde.herokuapp.com/alunos"
        );
        this.setState({ alunos: response.data });
    };

    render() {
        const { alunos } = this.state;
        const { nome } = this.state;

        const dadosFiltrados = alunos.filter(aluno => {
            const regex = new RegExp(nome, "gi");
            return regex.test(aluno.nome);
        });

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
                    <HeaderText>Buscar Alunos</HeaderText>
                </Header>
                <InputCard
                    placeholder="Pesquise Aqui ..."
                    onChangeText={nome => this.setState({ nome })}
                />
                <TableContainer>
                    <FlatList
                        data={dadosFiltrados}
                        renderItem={({ item }) => (
                            <Aluno
                                aluno={item}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={(item, i) => String(i)}
                        maxToRenderPerBatch={10}
                        removeClippedSubviews={true}
                    />
                </TableContainer>
            </Container>
        );
    }
}

const Container = styled.View`
    background-color: #f2b632;
    height: 100%;
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
`;

const InputCard = styled.TextInput`
    text-align: center;
    font-family: "FiraCode-Regular";
    font-size: 10px;
    flex-direction: row;
    background-color: white;
    border-radius: 25px;
    margin: 10px;
`;
const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px;
    margin-right: 20%;
`;
const TableContainer = styled.ScrollView`
    display: flex;
    background-color: white;
    margin: auto;
    width: 94%;
    height: 70%;
    border-radius: 25px;
    flex-grow: 1;
`;
