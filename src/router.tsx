import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./components/AbrigoInfo";
// import { Header } from "../components/header";
import ModalPessoas from "./components/ModalPessoas";


const Home: React.FC = () => (
    <div>
        <h1>Bem-vindo à Página Inicial</h1>
        <ModalPessoas />
    </div>
);


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/abrigoinfo/:id" element={<AbrigoInfo />} />
                <Route path="/modalpessoas" element={<ModalPessoas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;