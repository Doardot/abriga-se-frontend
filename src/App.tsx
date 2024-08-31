import { Flex } from "antd";
import Router from './router.tsx'
import './App.css'
import Header from "./components/header/Header.tsx";
import RegisterSheltered from "./modules/RegisterShelteredPage/RegisterSheltered.tsx";

function App() {
  return (
    // <Flex id="App">
    //   <Router />
    // </Flex>
<RegisterSheltered onFinish={(values: any) => {}} />
);
}

export default App;
