import React from "react";
import styled from "styled-components";
import "./TopHeader.css";

function TopHeader(props) {
  return (
    <HeaderComponent className="TopHeader">
      <Image src="/images/desu-2.png" alt="" id="image_1" />
      <Content>
        <p>{props.value}</p>
      </Content>
      <Image2 src="/images/rogb.png" atl="" id="image_2" />
    </HeaderComponent>
  );
}
const HeaderComponent = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
`;
const Content = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: #193b6b;
`;
const Image = styled.img`
  height: 90px;
  width: 90px;
`;
const Image2 = styled.img`
  height: 85px;
  padding-top: 1rem;
  width: 85px;
`;
export default TopHeader;
