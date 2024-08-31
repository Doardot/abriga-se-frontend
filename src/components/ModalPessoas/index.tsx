import React, { useState } from 'react';
import { Modal, Button, Table } from 'antd';
import './index.css';
import pessoas from '../../api/api.json';

interface Pessoa {
  key: string;
  nome: string;
  idade: number;
}

const ModalPessoas: React.FC = () => {
  const [visible, setVisible] = useState(false);

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
      <Button
        type="primary"
        onClick={() => setVisible(true)}>
        Abrir Modal
      </Button>
      <Modal
        title={<span className="modal-title">
          Lista de pessoas
        </span>}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button
            key="Cancelar "
            onClick={() => setVisible(false)}
            className="botao-cancelar">
            Cancelar
          </Button>,
        ]}
      >
        <div className="table-container">
          <Table
            columns={columns}
            dataSource={pessoas}
            pagination={false} />
        </div>
      </Modal>
    </>
  );
};

export default ModalPessoas;