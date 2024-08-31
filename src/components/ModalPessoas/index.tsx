import React from 'react';
import { Modal, Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Pessoa {
  key: string;
  nome: string;
  idade: number;
}

interface ModalPessoasProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  pessoas: Pessoa[];
}

const ModalPessoas: React.FC<ModalPessoasProps> = ({ visible, setVisible, pessoas }) => {
  const navigate = useNavigate();

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
      render: (_: any, record: Pessoa) => (
        <Button
          className="ver-abrigo-btn"
          onClick={() => navigate('/abrigoinfo/' + record.key)}
        >
          Ver abrigo
        </Button>
      ),
    },
  ];

  return (
    <Modal
      title="Lista de pessoas"
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={[
        <Button
          key="cancelar"
          onClick={() => setVisible(false)}
        >
          Cancelar
        </Button>,
      ]}
    >
      <Table
        columns={columns}
        dataSource={pessoas}
        pagination={false}
      />
    </Modal>
  );
};

export default ModalPessoas;
