import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Register.css";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => alert(res.data.message));
        alert("register successfully")
      navigate("/");
    } else {
      alert("Please complete your registration fields");
    }
  };
  return (
    <Container>
      <div className="register">
      <p>
          <SiGnuprivacyguard style={{ color: "#132c4e", fontSize: "70px" }} />
        </p>
        {console.log("User", user)}
        {/* <h2>Register</h2> */}
        <i className="icon"><BsFillPersonFill style={{ color: "#132c4e" }}/>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        </i>
        <i className="icon"><AiOutlineMail style={{ color: "#132c4e" }}/>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        </i>
        <i className="icon"><RiLockPasswordFill style={{ color: "#132c4e"}}/>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your password"
          onChange={handleChange}
        ></input>
        </i>
        <i className="icon"><RiLockPasswordFill style={{ color: "#132c4e"}}/>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter password"
          onChange={handleChange}
        ></input>
        </i>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/")}>
          Login
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

export default Register;
