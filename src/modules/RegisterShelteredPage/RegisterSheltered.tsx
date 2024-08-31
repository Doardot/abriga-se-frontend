import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./Index.css";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

interface RegisterShelteredProps {
  onFinish: (values: any) => void;
}

const RegisterSheltered: React.FC<RegisterShelteredProps> = ({ onFinish }) => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    navigate('/');
  };

  return (
    <>
      <Header isVisible={false} onClickLogin={""} onClickRegister={""} />
      <div style={{ padding: "20px 50px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Cadastro do abrigado
        </h1>
        <Form layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor, insira o nome!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nome da mãe" name="nomeMae" rules={[{ required: true, message: 'Por favor, insira o nome da mãe!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Idade"
                name="idade"
                rules={[
                  { required: true, message: 'Por favor, insira a idade!' },
                  {
                    validator: (_, value) =>
                      value && Number(value) > 0
                        ? Promise.resolve()
                        : Promise.reject(new Error('A idade deve ser um número positivo!')),
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nome do pai" name="nomePai" rules={[{ required: true, message: 'Por favor, insira o nome do pai!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Complemento" name="complemento">
                <Input.TextArea
                  placeholder="Adicione informações adicionais (opcional)"
                  autoSize={{ minRows: 4, maxRows: 6 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Salvar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default RegisterSheltered;
