import { BrowserRouter, Route, Routes } from "react-router-dom";
import AbrigoInfo from "./modules/AbrigoInfo";
import LoginPage from "./modules/loginPage";
import { LandingPage } from "./modules/landing-page/pages/LandingPage";
import RegisterSheltered from "./modules/RegisterShelteredPage/RegisterSheltered";
import RegisterPage from "./modules/shelterRegistrationPage";
import ShelterList from "./modules/shelters/ShelterList";


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
                <Route path="/shelters" element={<ShelterList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;