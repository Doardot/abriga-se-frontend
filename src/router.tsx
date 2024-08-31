import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./components/AbrigoInfo";
import LoginPage from "./modules/loginPage";
import { LandingPage } from "./modules/landing-page/pages/LandingPage";
import RegisterPage from "./modules/shelterRegistrationPage"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {<Route path="/login" element={<LoginPage />} />}
                <Route path="/abrigoinfo/:id" element={<AbrigoInfo />} />
                <Route path="/register-shelter" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;