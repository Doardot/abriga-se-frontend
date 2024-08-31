import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dadosAbrigo from '../../api/abrigos.json';
import './index.css';

const AbrigoInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(true);

  const abrigo = dadosAbrigo[0];

  const handleCredentialClick = () => {
    navigate('/login');
  };

  const handleCancelClick = () => {
    setModalVisible(false);
  };

  return (
    <div className="abrigo-info-container">
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>AVISO!</h2>
            <p>Por questões de segurança, você precisa de uma credencial autorizada para acessar esses dados. Procure uma autoridade local.</p>
            <div className="modal-buttons">
              <button onClick={handleCredentialClick}>Tenho credencial</button>
              <button onClick={handleCancelClick}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      <div className={`content ${modalVisible ? 'blurred' : ''}`}>
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
    </div>
  );
};

export default AbrigoInfo;
