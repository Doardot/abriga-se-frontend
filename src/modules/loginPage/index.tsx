import React, { useState } from 'react';
import './index.css';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Email e senha são obrigatórios');
            return;
        }
        console.log('Email:', email);
        console.log('Senha:', password);
        setEmail('');
        setPassword('');
        setError(null);
    };

    return (
        <div className="page-container">
            <ArrowLeftOutlined className="back-arrow" onClick={() => navigate('/')} />
            <div className="login-container">

                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={
                                <Tooltip title="Digite seu email">
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            style={{
                                width: '400px',
                                height: '50px',
                                fontSize: '16px',
                                marginBottom: '1rem'  // Adiciona espaço entre o input e o próximo elemento
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <Input.Password
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                            style={{
                                width: '400px',
                                height: '50px',
                                fontSize: '16px',
                                marginBottom: '1rem'  // Adiciona espaço entre o input e o próximo elemento
                            }}
                        />
                    </div>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            width: '400px',
                            height: '50px',
                            fontSize: '21px',
                            fontWeight: 'bold'
                        }}
                    >
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
