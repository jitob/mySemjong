import React from "react";
import styled from "styled-components";

const FRDisplay = (props) => {
  return (
    <FRContainer>
      <FRName>
        <p>{props.name}</p>
      </FRName>
      <Rate
        className={
          props.FR === 0
            ? "FROFF"
            : 0 < props.FR < 1
            ? "FRAbnormal"
            : "FRNormal"
        }
      >
        {props.FR === 0 ? (
          <p style={{ fontFamily: "Roboto", fontSize: "12px" }}>
            No Connection
          </p>
        ) : (
          <h4> {props.FR}</h4>
        )}
      </Rate>
      <TF
        className={
          props.TF === 0
            ? "FROFF"
            : 0 < props.TF < 1
            ? "FRAbnormal"
            : "FRNormal"
        }
      >
        {props.TF === 0 ? (
          <p style={{ fontFamily: "Roboto", fontSize: "12px" }}>
            No Connection
          </p>
        ) : (
          <h4> {props.TF}</h4>
        )}
      </TF>
    </FRContainer>
  );
};

const FRContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FRName = styled.div`
  font-size: 13px;
  font-weight: 100px;
  color: #1b75bc;
  font-family: "Roboto", sans-serif;
  margin-left: 1.5rem;
`;
const Rate = styled.div`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-left: 1rem;
`;
const TF = styled.div`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-left: 1rem;
`;

export default FRDisplay;
