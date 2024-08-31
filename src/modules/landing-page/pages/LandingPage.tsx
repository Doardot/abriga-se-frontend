import React, { useState } from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../style/index.css";
import { useNavigate } from "react-router-dom";
import ModalPessoas from "../../../components/ModalPessoas";

const { Content } = Layout;

export function LandingPage() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout className="root">
            <Content>
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} sm={16} md={12} lg={8} style={{ textAlign: 'center' }}>
                        <h1 className="titulo">Seja bem-vindo</h1>
                        <p>Este é o Abriga-se, plataforma que ajuda a encontrar seus amigos e familiares em momentos de crise.</p>
                        <Input
                            placeholder="Insira o nome"
                            prefix={<SearchOutlined />}
                            style={{ marginBottom: '20px', marginTop: '20px' }}
                            size="large"
                        />
                        <p>
                            Se está em busca de alguém específico, use a barra acima. Caso deseje ver os abrigos registrados, utilize o botão abrigos.
                        </p>
                        <div className="botoes">
                            <Button type="primary" className="botao">Abrigos</Button>
                            <Button type="primary"
                                className="botao"
                                onClick={() => setModalVisible(true)}
                            >
                                Buscar
                            </Button>
                        </div>
                    </Col>
                </Row>
                <ModalPessoas visible={modalVisible} setVisible={setModalVisible} />
            </Content>
        </Layout>
    );
}
