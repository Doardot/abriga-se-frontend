import React from "react";
import "./Index.css";
import { Button } from "antd";

interface HeaderProps {
  isVisible: boolean;
  onClickLogin: string;
  onClickRegister: string;
}

export function Header({ isVisible }: HeaderProps) {
  return (
    <header className="layout">
      <p className="mainText">Abriga-se</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isVisible && (
          <>
            <p className="secText">Você é um abrigo?</p>
            <div className="buttons">
              <Button style={{borderColor: 'blue', color: 'blue'}} size="large">Entrar</Button>
              <Button style={{borderColor: 'blue', color: 'blue'}} size="large">Cadastra-se</Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
