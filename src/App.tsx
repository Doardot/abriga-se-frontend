import { useState } from 'react'
import { Flex } from "antd";
import Router from './router.tsx'
import './App.css'

function App() {
  return (
    <Flex id="App">
      <Router />
    </Flex>
  );
}

export default App
