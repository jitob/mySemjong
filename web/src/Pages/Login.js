import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Components/auth";
import styled from "styled-components";
import "./Login.css";
import axios from "axios";
import { VscAccount } from "react-icons/vsc";
// import { IoMailSharp } from "react-icons/io5";
import { AiOutlineMail } from  "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const login = () => {
    const { email, password } = user;
    if((email && password === password)) {
      localStorage.setItem('user', 'test')
      axios
        .post("http://localhost:9002/Login", user)
        .then((res) => alert(res.data.message));
      navigate("/HomePage");
    } else {
      alert("Fill in correct email and password");
      }
    };
  return (
    <Container>
      <div className="login">
        {console.log("User", user)}
        <p>
          <VscAccount style={{ color: "#132c4e", fontSize: "70px" }} />
        </p>
        <i className="icon"><AiOutlineMail style={{ color: "#132c4e" }}/>
        <input 
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          ></input>
            </i>
            <i className="icon"><RiLockPasswordFill style={{ color: "#132c4e"}}/>
          <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handleChange}
        ></input>
          </i>
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/Register")}>
          Register
        </div>
      </div>
    </Container>
  );
};

// Parent Containers
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 80vh;
`;

export default Login;
