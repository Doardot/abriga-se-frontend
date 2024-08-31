import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./components/AbrigoInfo";
import LoginPage from "./modules/loginPage";
import ModalPessoas from "./components/ModalPessoas";
import { LandingPage } from "./modules/landing-page/pages/LandingPage";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {<Route path="/login" element={<LoginPage />} />}
                <Route path="/abrigoinfo/:id" element={<AbrigoInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;