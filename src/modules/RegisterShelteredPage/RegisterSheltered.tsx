import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./Index.css";
import Header from "../../components/header/Header";

interface RegisterShelteredProps {
  onFinish: (values: any) => void;
}

const RegisterSheltered: React.FC<RegisterShelteredProps> = ({ onFinish }) => {
  return (
    <>
      <Header isVisible={false} onClickLogin={""} onClickRegister={""} />
      <div style={{ padding: "20px 50px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Cadastro do abrigado
        </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Nome" name="nome">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nome da mãe" name="nomeMae">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Idade"
                name="Idade"
                rules={[
                    { required: true, message: 'Por favor, insira a idade!' },
                    {
                        validator: (_, value) =>
                            value && Number(value) > 0
                                ? Promise.resolve()
                                : Promise.reject(),
                    },
                ]}
              >
                <Input  />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nome do pai" name="nomePai">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Complemento" name="complemento">
                <Input.TextArea
                  placeholder="Adicione informações adicionais(opcional)"
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
