import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dadosAbrigo from '../../api/abrigos.json';
import './index.css';

const AbrigoInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  const abrigo = dadosAbrigo[0];

  return (
    <div className="abrigo-info-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>
      <h1 className="abrigo-title">Instituição: {abrigo.nome}</h1>
      <div className="abrigo-details">
        <div className="left-section">
          <p><strong>Nome</strong><br />{abrigo.nome}</p>
          <p><strong>Email</strong><br />{abrigo.email}</p>
          <p><strong>Contato</strong><br />{abrigo.contato}</p>
          <p><strong>Endereço</strong><br />{abrigo.endereco}</p>
        </div>
        <div className="right-section">
          <p><strong>Complemento</strong><br />{abrigo.complemento}</p>
        </div>
      </div>
    </div>
  );
};

export default AbrigoInfo;
