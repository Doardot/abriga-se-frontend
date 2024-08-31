import React from "react";
import "./Index.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isVisible: boolean;
  onClickLogin: string;
  onClickRegister: string;
}

export function Header({ isVisible }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="layout">
      <p className="mainText">Abriga-se</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isVisible && (
          <>
            <p className="secText">Você é um abrigo?</p>
            <div className="buttons">
              <Button style={{ borderColor: 'blue', color: 'blue', marginTop: 0, marginRight: '5%' }} size="large" onClick={() => navigate('/login')}>Entrar</Button>
              <Button style={{ borderColor: 'blue', color: 'blue', marginTop: 0 }} size="large" onClick={() => navigate('register-shelter')} >Cadastre-se</Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
