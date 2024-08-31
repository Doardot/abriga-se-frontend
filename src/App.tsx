import { useState } from 'react'
import { Flex } from "antd";
import Router from './router.tsx'
import './App.css'
import LoginPage from './components/header/loginPage/index.tsx'
import { LandingPage } from './api/landing-page/pages/LandingPage'
import ModalPessoas from './components/ModalPessoas'

function App() {
  return (
    <Flex id="App">
      <Router />
    </Flex>
  );
}

export default App;
