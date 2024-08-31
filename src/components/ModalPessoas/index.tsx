import React, { useState } from 'react';
import { Modal, Button, Table } from 'antd';
import './index.css';

interface Pessoa {
  key: string;
  nome: string;
  idade: number;
}

const ModalPessoas: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Dados mockados
  const pessoas: Pessoa[] = [
    {
      key: '1',
      nome: 'Eduardo Augusto Nascimento',
      idade: 30,
    },
    {
      key: '2',
      nome: 'Eduardo Augusto Nascimento',
      idade: 45,
    },
  ];

  // Definição das colunas da tabela
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Idade',
      dataIndex: 'idade',
      key: 'idade',
    },
    {
      title: 'Informações',
      key: 'informacoes',
      // SUBSTITUIR PELO BOTAO VER ABRIGO
      render: (_: any, record: Pessoa) => (
        <Button className="ver-abrigo-btn">Ver abrigo</Button>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Abrir Modal
      </Button>
      <Modal
        title={<span className="modal-title">Lista de pessoas</span>}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setVisible(false)} className="footer-btn">
            Cancelar
          </Button>,
          <Button key="confirm" type="primary" onClick={() => setVisible(false)} className="footer-btn">
            Confirmar
          </Button>,
        ]}
      >
        <div className="table-container">
          <Table columns={columns} dataSource={pessoas} pagination={false} />
        </div>
      </Modal>
    </>
  );
};

export default ModalPessoas;