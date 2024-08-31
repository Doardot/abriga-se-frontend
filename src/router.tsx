import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./components/AbrigoInfo";
import LoginPage from "./modules/loginPage";
import { LandingPage } from "./modules/landing-page/pages/LandingPage";
import RegisterSheltered from "./modules/RegisterShelteredPage/RegisterSheltered";
import RegisterPage from "./modules/shelterRegistrationPage"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {<Route path="/login" element={<LoginPage />} />}
                <Route path="/abrigoinfo/:id" element={<AbrigoInfo />} />
                <Route path="/register-sheltered" element = {<RegisterSheltered onFinish={function (values: any): void {;
                } } />} />
                <Route path="/register-shelter" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;