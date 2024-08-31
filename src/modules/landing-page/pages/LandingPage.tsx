import React, { useState } from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../style/index.css";
import { useNavigate } from "react-router-dom";
import ModalPessoas from "../../../components/ModalPessoas";
import Header from "../../../components/header/Header";
import pessoas from '../../../api/api.json';

const { Content } = Layout;

interface Pessoa {
    key: string;
    nome: string;
    idade: number;
}

export function LandingPage() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [filteredPessoas, setFilteredPessoas] = useState<Pessoa[]>([]);

    // Função para filtrar pessoas com base no nome
    const handleSearch = () => {
        if (nome.trim() === "") {
            setFilteredPessoas([]); // Se o campo estiver vazio, definir lista vazia
        } else {
            const filtered = pessoas.filter((pessoa) =>
                pessoa.nome.toLowerCase().includes(nome.toLowerCase())
            );
            setFilteredPessoas(filtered);
        }
        setModalVisible(true);
    };

    // Função para detectar a tecla Enter
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Layout className="root">
            <div>
                <Header isVisible={true} onClickLogin={''} onClickRegister={''} />
            </div>
            <Content>
                <Row justify="center" align="middle">
                    <Col xs={24} sm={16} md={12} lg={8} style={{ textAlign: 'center' }}>
                        <h1 className="titulo">Seja bem-vindo</h1>
                        <p className="subTitulo">Este é o Abriga-se, plataforma que ajuda a encontrar seus amigos e familiares em momentos de crise.</p>
                        <Input
                            placeholder="Insira o nome"
                            prefix={<SearchOutlined />}
                            style={{ marginBottom: '20px', marginTop: '20px' }}
                            size="large"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <p className="subTitulo">
                            Se está em busca de alguém específico, use a barra acima. Caso deseje ver os abrigos registrados, utilize o botão abrigos.
                        </p>
                        <div className="botoes">
                            <Button type="primary" className="botao" onClick={() => navigate('/abrigos')}>
                                Abrigos
                            </Button>
                            <Button
                                type="primary"
                                className="botao"
                                onClick={handleSearch}
                            >
                                Buscar
                            </Button>
                        </div>
                    </Col>
                </Row>
                <ModalPessoas
                    visible={modalVisible}
                    setVisible={setModalVisible}
                    pessoas={filteredPessoas}
                />
            </Content>
        </Layout>
    );
}

export default LandingPage;
