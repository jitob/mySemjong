import React from "react";
import styled from "styled-components";
import { NavLink, useLocation, useNavigate} from "react-router-dom";
// import { useAuth } from "./auth";
import "../App.css";

const Nav = () => {
 
  const handleClick = () => {
    window.open("http://gorilline-bloodhound-5820.dataplicity.io");
    // alert("You are being redirected to a new window.");  
  };

  const useAuth = () => {
    const user =localStorage.getItem("user");
    if(!user) {
      return true;
    } else {
      return false;
    }
  }
  const user = useAuth();
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate("/")

  }
  return (
    <Container>
      <Image src="/images/dhilogo.png" alt="" />
      <Title>
        <h4>DE-SUUNG NATIONAL SERVICE WATER PROJECT</h4>
      </Title>
      <SubTitle>
        <p>Semjong Integrated Water Supply Pilot Project</p>
      </SubTitle>
      <List>
        <ul className="navdesign">
        {
              !user && <>
                {/* <li>
            <NavLink 
              className={({ isActive }) => (isActive ? "active" : "inactive")} 
              to="/"
              >
                Login
              </NavLink>            
          </li>
          <li> 
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/Register"
            >
              Register
            </NavLink>
          </li> */}
          <li>
            <NavLink 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/HomePage">HomePage</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/WaterScheduling">WaterScheduling</NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/AboutUs">AboutUs</NavLink>
          </li>

          {/* <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/AboutUs"
            >
              About Us
            </NavLink>
          </li> */}
              </>  
              
            }
            {/* {
            location.pathname !== '/' && location.pathname !== '/Register' && <button onClick={logout}>Logout</button> 
            }      */}
          {
            user && <>        
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/Register"
            >
              Register
            </NavLink>
          </li>
          
            </>
          }
            {
            location.pathname === '/HomePage' && <button onClick={logout}>Logout</button> 
            }
           
        </ul>        
      </List>
     
      <ListSub>
        <ul>
          <li style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
            Contact Details
          </li>
          <li
            style={{
              fontFamily: "Roboto",
              color: "white",
              opacity: "80%",
              fontSize: "12px",
            }}
          >
            Random@gmail.com
          </li>
          <li
            style={{
              fontFamily: "Roboto",
              color: "white",
              opacity: "80%",
              fontSize: "12px",
            }}
          >
            12345678
          </li>
        </ul>
      </ListSub>
      <LastDiv>
        <p>Drive, Innotech Dept DHI</p>
      </LastDiv>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #132c4e;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
const Image = styled.img`
  margin-top: 2rem;
  margin-left: -1rem;
  height: 85px;
  width: 125px;
  background-color: #132c4e;
`;
const Title = styled.div`
  color: white;
  margin-top: -15px;
  background-color: #132c4e;
  font-family: montserrat;
  padding: 0 1rem;
`;
const SubTitle = styled.div`
  color: white;
  opacity: 80%;
  width: 180px;
  margin-top: -30px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
`;
const List = styled.div`
  width: 100%;
  background-color: #132c4e;
  font-family: "Roboto", sans-serif;
  ul {
    list-style: none;
    li {
      padding: 0.5rem;
      text-decoration: none;
      color: white;
    }
  }
`;
const ListSub = styled.div`
  display: block;
  text-align: left;
  margin: 0 auto;
  width: 90%;
  ul {
    list-style: none;
    color: white;
    li {
      margin-bottom: 5px;
    }
  }
`;
const LastDiv = styled.div`
  color: white;
  font-size: 14px;
  width: 100%;
  height: 29px;
  padding-bottom: 1rem;
  align-items: center;
  background-color: #091628;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
export default Nav;
