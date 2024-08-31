import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./components/AbrigoInfo";
import LoginPage from "./modules/loginPage";
import { LandingPage } from "./modules/landing-page/pages/LandingPage";
import RegisterSheltered from "./modules/RegisterShelteredPage/RegisterSheltered";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {<Route path="/login" element={<LoginPage />} />}
                <Route path="/abrigoinfo/:id" element={<AbrigoInfo />} />
                <Route path="/register-sheltered" element = {<RegisterSheltered onFinish={function (values: any): void {;
                } } />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;