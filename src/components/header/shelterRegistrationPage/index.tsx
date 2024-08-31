import React, { useState } from 'react';
import './index.css';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip } from 'antd';

const RegisterPage: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [numero, setNumero] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome || !email || !senha || !numero || !endereco) {
            setError('Todos os campos são obrigatórios');
            return;
        }
        // Implementar a lógica para o registro aqui
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Número de telefone:', numero)
        console.log('Endereço', endereco)
        console.log('complemento', complemento)
        setNome('');
        setEmail('');
        setSenha('');
        setNumero('');
        setEndereco('');
        setComplemento('');
        setError(null);
    };

    return (
        <div className="page-container">
            <ArrowLeftOutlined className="back-arrow" onClick={() => console.log('Voltar clicado')} />
            <form onSubmit={handleSubmit}>
                <h2>Registrar Abrigo</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <Input
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome do abrigo"
                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Input
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="Digita seu número de telefone"
                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem',
                        }}
                    />
                </div>
                <div className="form-group">
                    <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"

                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Input
                        id="endereco"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        placeholder="Digite seu endereço"

                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Input
                        id="complemento"
                        value={endereco}
                        onChange={(e) => setComplemento(e.target.value)}
                        placeholder="Digite seu complemento"

                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Input.Password
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        style={{
                            height: '50px',
                            fontSize: '16px',
                            marginBottom: '1rem'
                        }}
                    />
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        height: '50px',
                        fontSize: '21px',
                        fontWeight: 'bold',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                >
                    Registrar
                </Button>
            </form>
        </div>
    );
};

export default RegisterPage;
