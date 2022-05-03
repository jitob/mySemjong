import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
// import { Anchor } from 'antd';

import TopHeader from "./Components/TopHeader";
import styled from "styled-components";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
// import Protected from "./Pages/Protected";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import WaterScheduling from "./Pages/WaterScheduling";
import Protected from "./Pages/Protected";
import Public from "./Pages/Public";

import "./App.css";


function App() {
  // const [auth, setAuth] = useState(false);
  // // const navigate = useNavigate();

  // const login = () => {
  //   setAuth(true);
  //   navigate('/HomePage')
  // }
  // const logout = () => {
  //   setAuth(false);
  //   navigate('/')
  // }
  // const handleClick = () => {
  //   window.open("http://gorilline-bloodhound-5820.dataplicity.io");
  // };
  // const [ user, setLoginUser ] = useState({
  
    // name: "",
    // email: "",
    // password: ""
  // })
  return (
    <Container>
      <NavComponent>
        <Nav />
      </NavComponent>
      <ContentComponent>
        <TopHeader value={"DHI Water Management System"} />
        <Content>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
              <Route exact path="/AboutUs" element={<AboutUs/>} />
              
            <Route path="/" element={<Protected/>}>
              <Route exact path="/HomePage" element={<HomePage />} /> 
              <Route exact path="/WaterScheduling" element={<WaterScheduling />} />
              
            </Route>
            <Route exact path="/" element={<Public/>}>
              <Route path="/" element={<Login/>} />
            </Route>
          </Routes>
        </Content>
      </ContentComponent>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f5f6fc;
`;
const ContentComponent = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
const NavComponent = styled.div`
  flex: 20%;
  width: 100%;
`;

const Content = styled.div`
  margin: 0.75rem;
  height: 100%;
  width: 80vw;
`;

export default App;
