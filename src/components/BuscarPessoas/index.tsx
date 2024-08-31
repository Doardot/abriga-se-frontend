import React, { useState } from 'react';
import { Input, Button } from 'antd';
import ModalPessoas from '../ModalPessoas';
import pessoas from '../../api/api.json';

export const BuscarPessoas = () => {
  const [nome, setNome] = useState('');
  const [filteredPessoas, setFilteredPessoas] = useState<{ key: string; nome: string; idade: number; }[]>([]);
  const [visible, setVisible] = useState(false);

  const handleSearch = () => {
    const filtered = pessoas.filter((pessoa) =>
      pessoa.nome.toLowerCase().includes(nome.toLowerCase())
    );
    setFilteredPessoas(filtered);
    setVisible(true);
  };

  return (
    <div>
      <Input
        placeholder="Digite o nome da pessoa"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button onClick={handleSearch} style={{ marginLeft: 10 }}>
        Buscar
      </Button>

      <ModalPessoas
        visible={visible}
        setVisible={setVisible}
        pessoas={filteredPessoas}
      />
    </div>
  );
};
