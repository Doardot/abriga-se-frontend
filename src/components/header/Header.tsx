import React from "react";
import './Index.css';
import { Button } from "antd";

function Header() {
    
    
    
    return(
        <div className={"layout"}>
            <p className="mainText">Abriga-se</p>
            
            <div className="buttons">
                <Button size="large" >Entrar</Button>
                <Button size="large" >Cadastra-se</Button>
            </div>


        </div>


    );
}




export default Header