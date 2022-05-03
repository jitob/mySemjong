import React from "react";
import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// SOCKET IO
import { io } from "socket.io-client";
// COMPONENTS
import FRDisplay from "../Components/FRDisplay";
import Switch from "../Components/Switch";
// EXTERNAL PACKAGES
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  // WATER TANK LEVEL STATE
  const [Tank1L, setTank1L] = useState(0);
  const [Tank2L, setTank2L] = useState(0);

  // FLOW RATE STATE
  const [Incomming, setIncomming] = useState(0);
  const [OutGoing, setOutGoing] = useState(0);

  // ZONE FLOW RATE STATE
  const [Zone1FR, setZone1FR] = useState(0);
  const [Zone2FR, setZone2FR] = useState(0);
  const [Zone3FR, setZone3FR] = useState(0);
  const [Zone4FR, setZone4FR] = useState(0);
  const [Zone5FR, setZone5FR] = useState(0);
  const [Zone6FR, setZone6FR] = useState(0);
  const [Zone7FR, setZone7FR] = useState(0);
  const [Zone8FR, setZone8FR] = useState(0);

  // ZONE TOTAL FLOW STATE
  const [Zone1TF, setZone1TF] = useState(0);
  const [Zone2TF, setZone2TF] = useState(0);
  const [Zone3TF, setZone3TF] = useState(0);
  const [Zone4TF, setZone4TF] = useState(0);
  const [Zone5TF, setZone5TF] = useState(0);
  const [Zone6TF, setZone6TF] = useState(0);
  const [Zone7TF, setZone7TF] = useState(0);
  const [Zone8TF, setZone8TF] = useState(0);

  // VAVLE STATUS
  const [valve, setValve] = useState(false);

  // Flow Rate Data from Sensor
  const socketRef = useRef(true);
  useEffect(() => {
    // TOTAL FLOW OF 8 ZONES
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("TF116", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone1TF(message);
    });
    socketRef.current.on("TF64", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone2TF(message);
    });
    socketRef.current.on("TF120", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone3TF(message);
    });
    socketRef.current.on("TF113", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone4TF(message);
    });
    socketRef.current.on("TF114", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone5TF(message);
    });
    socketRef.current.on("TF115", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone6TF(message);
    });
    socketRef.current.on("TF118", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone7TF(message);
    });
    socketRef.current.on("TF112", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone8TF(message);
    });
    // FLOW RATE FOR 8 ZONES
    socketRef.current.on("FR116", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone1FR(message);
    });
    socketRef.current.on("FR64", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone2FR(message);
    });
    socketRef.current.on("FR120", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone3FR(message);
    });
    socketRef.current.on("FR113", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone4FR(message);
    });
    socketRef.current.on("FR114", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone5FR(message);
    });
    socketRef.current.on("FR115", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone6FR(message);
    });
    socketRef.current.on("FR118", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone7FR(message);
    });
    socketRef.current.on("FR112", (message) => {
      message = parseFloat(message).toFixed(2);
      setZone8FR(message);
    });
    // INCOMMING AND OUTGOING FLOW
    socketRef.current.on("FR4", (message) => {
      message = parseFloat(message).toFixed(2);
      setIncomming(message);
    });
    socketRef.current.on("FR8", (message) => {
      message = parseFloat(message).toFixed(2);
      setOutGoing(message);
    });
    // TANK LEVEL
    socketRef.current.on("LevelIRR2", (message) => {
      message = parseFloat(message).toFixed(2);
      setTank1L(message);
    });
    socketRef.current.on("DrinkL1", (message) => {
      message = parseFloat(message).toFixed(2);
      setTank2L(message);
    });
    return () => {
      socketRef.current = false;
    };
  }, []);

  // WATER TANK PERCENTAGE CALCULATION
  let PercentageT1 = ((Tank1L * 10 * 15) / (3.4 * 10 * 15)) * 100;
  let PercentageT1N = 100 - PercentageT1;
  let PercentageT2 = ((Tank2L * 5 * 2.44) / (3.4 * 5 * 2.44)) * 100;
  let PercentageT2N = 100 - PercentageT2;

  const Data1NORMAL = {
    datasets: [
      {
        data: [PercentageT1, PercentageT1N],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "#fff"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const Data2NORMAL = {
    datasets: [
      {
        data: [PercentageT2, PercentageT2N],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "#fff"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const Data1LOW = {
    datasets: [
      {
        data: [PercentageT1, PercentageT1N],
        backgroundColor: ["rgba(201, 38, 38, 0.2)", "#fff"],
        borderColor: ["rgba(201, 38, 38, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const Data2LOW = {
    datasets: [
      {
        data: [PercentageT2, PercentageT2N],
        backgroundColor: ["rgba(201, 38, 38, 0.2)", "#fff"],
        borderColor: ["rgba(201, 38, 38, 1)"],
        borderWidth: 1,
      },
    ],
  };

  let val1 = Tank1L > 1 ? Data1NORMAL : Data1LOW;
  let val2 = Tank2L > 1 ? Data2NORMAL : Data2LOW;
  // TOGGLE HANDLER
  const onValveChange = () => {
    let confirm = window.confirm(" Confirm Change ");
    if (confirm) {
      setValve(!valve);
    }
  };
  return (
    <Container>
      <LEFT>
        <LEFTTOP>
          <TopComponents>
            <Heading>
              <p>Reservoir Tank</p>
            </Heading>
            <ComponentWrapper>
              <TLBar>
                <Doughnut data={val1} />
              </TLBar>
              <TLData>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Level(m)
                </p>
                <Tank className={Tank1L > 1 ? "WNormal" : "WWarning"}>
                  <p>{Tank1L}</p>
                </Tank>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Volume(m<sup>3</sup>)
                </p>
                <Tank className={Tank1L > 1 ? "WNormal" : "WWarning"}>
                  <p>{parseFloat(Tank1L * 10 * 15).toFixed(0)}</p>
                </Tank>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Percentage%
                </p>
                <Tank className={Tank1L > 1 ? "WNormal" : "WWarning"}>
                  <p>{parseFloat(PercentageT1).toFixed(1)}%</p>
                </Tank>
              </TLData>
            </ComponentWrapper>
          </TopComponents>
          <TopComponents>
            <Heading>
              <p>Drinking Water Tank</p>
            </Heading>
            <ComponentWrapper>
              <TLBar>
                <Doughnut data={val2} />
              </TLBar>
              <TLData>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Level(m)
                </p>
                <Tank className={Tank2L > 1 ? "WNormal" : "WWarning"}>
                  <p>{Tank2L}</p>
                </Tank>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Volume(m<sup>3</sup>)
                </p>
                <Tank className={Tank2L > 1 ? "WNormal" : "WWarning"}>
                  <p>{parseFloat(Tank2L * 5 * 2.44).toFixed(0)}</p>
                </Tank>
                <p
                  style={{
                    color: "#1b75bc",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                >
                  Percentage%
                </p>
                <Tank className={Tank2L > 1 ? "WNormal" : "WWarning"}>
                  <p>{parseFloat(PercentageT2).toFixed(1)}%</p>
                </Tank>
              </TLData>
            </ComponentWrapper>
          </TopComponents>
        </LEFTTOP>
        <LEFTBOTTOM>
          <BottomComponent>
            <Heading>
              <p>Flow Rate Display</p>
            </Heading>
            <HeadingRow>
              <HeadingLeft>
                <p
                  style={{
                    paddingLeft: "7rem",
                  }}
                >
                  Flow Rate(m<sup>3</sup>/hr)
                </p>
                <p
                  style={{
                    paddingRight: "2rem",
                  }}
                >
                  Total Flow(m<sup>3</sup>)
                </p>
              </HeadingLeft>
              <HeadingRight>
                <p
                  style={{
                    paddingLeft: "7rem",
                  }}
                >
                  Flow Rate(m<sup>3</sup>/hr)
                </p>
                <p
                  style={{
                    paddingRight: "2rem",
                  }}
                >
                  Total Flow(m<sup>3</sup>)
                </p>
              </HeadingRight>
            </HeadingRow>
            <FRD>
              <FRDColumn1>
                <FRDisplay name={"Zone 1"} FR={Zone1FR} TF={Zone1TF} />
                <FRDisplay name={"Zone 2"} FR={Zone2FR} TF={Zone2TF} />
                <FRDisplay name={"Zone 3"} FR={Zone3FR} TF={Zone3TF} />
                <FRDisplay name={"Zone 4"} FR={Zone4FR} TF={Zone4TF} />
              </FRDColumn1>

              <FRDColumn2>
                <FRDisplay name={"Zone 5"} FR={Zone5FR} TF={Zone5TF} />
                <FRDisplay name={"Zone 6"} FR={Zone6FR} TF={Zone6TF} />
                <FRDisplay name={"Zone 7"} FR={Zone7FR} TF={Zone7TF} />
                <FRDisplay name={"Zone 8"} FR={Zone8FR} TF={Zone8TF} />
              </FRDColumn2>
            </FRD>
          </BottomComponent>
        </LEFTBOTTOM>
      </LEFT>
      <RIGHT>
        <RIGHTTOP>
          <Heading>
            <p>Flow Rate Display</p>{" "}
          </Heading>
          <FRDWrapper>
            <IncommingFlow>
              <p
                style={{
                  fontFamily: "Montserrat",
                  color: "#193b6b",
                  fontWeight: "bold",
                }}
              >
                Incomming Flow
              </p>
              <div
                className={
                  Incomming === 0
                    ? "FROFF"
                    : 0 < Incomming < 1
                    ? "WFMAbnormal"
                    : "WFMNormal"
                }
              >
                {Incomming === 0 ? (
                  <p style={{ fontFamily: "Roboto", fontSize: "12px" }}>
                    No Connection
                  </p>
                ) : (
                  <h4 style={{ fontFamily: "Roboto" }}> {Incomming}</h4>
                )}
              </div>{" "}
              <p
                style={{
                  color: "  rgb(0, 0, 0, 0.4)",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
              >
                Flow Rate of Main Pipe
              </p>
            </IncommingFlow>
            <DrinkingOutflow>
              <p
                style={{
                  fontFamily: "Montserrat",
                  color: "#193b6b",
                  fontWeight: "bold",
                }}
              >
                Drinking Outflow
              </p>
              <div
                className={
                  OutGoing === 0
                    ? "FROFF"
                    : 0 < OutGoing < 1
                    ? "WFMAbnormal"
                    : "WFMNormal"
                }
              >
                {OutGoing === 0 ? (
                  <p style={{ fontFamily: "Roboto", fontSize: "12px" }}>
                    No Connection
                  </p>
                ) : (
                  <h4 style={{ fontFamily: "Roboto" }}> {OutGoing}</h4>
                )}
              </div>
              <p
                style={{
                  color: "  rgb(0, 0, 0, 0.4)",
                  fontFamily: "Roboto",
                  fontSize: "11px",
                }}
              >
                Flow Rate of Drinking Pipe
              </p>
            </DrinkingOutflow>
          </FRDWrapper>
        </RIGHTTOP>
        <RIGHTBOTTOM>
          <Heading>
            <p
              style={{
                color: "#fff",
              }}
            >
              Valve Controller
            </p>
          </Heading>
          <ValveContainer>
            <Switch isOn={valve} handleToggle={onValveChange} />

            <p
              style={{
                color: "#fff",
                fontFamily: "Roboto",
                fontSize: "12px",
              }}
            >
              Valve Status
            </p>
            <p className={valve === true ? "valOn" : "valOff"}>
              {valve === true ? "On" : "Off"}
            </p> <br />
            {/* <div><button className="btn"onClick={logoutHandler}>Logout</button></div> */}
            
            <p
              style={{
                color: " #fff",
                fontFamily: "Roboto",
                fontSize: "11px",
              }}
            >
              Main Transmission Pipe Valve
            </p>
          </ValveContainer>
        </RIGHTBOTTOM>
      </RIGHT>
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
const Heading = styled.div`
  font-family: "Montserrat";
  padding: 0.5rem;
  font-size: 18px;
  font-weight: bold;
  color: #193b68;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const HeadingRow = styled.div`
  font-family: "Montserrat";
  font-size: 12px;
  color: #1b75bc;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const HeadingLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
const HeadingRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

// LEFT
const LEFT = styled.div`
  flex-direction: column;
  height: 100%;
  flex: 75%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
// RIGHT
const RIGHT = styled.div`
  flex-direction: column;
  flex: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

// LEFT COMPONENTS
const LEFTTOP = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 50%;
`;
const LEFTBOTTOM = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 50%;
`;
const TopComponents = styled.div`
  display: flex;
  flex: 35%;
  border-radius: 15px;
  flex-direction: column;
  margin: 0.25rem;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
const BottomComponent = styled.div`
  display: flex;
  flex: 35%;
  border-radius: 15px;
  flex-direction: column;
  margin: 0.25rem;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
// RIGHT COMPONENTS
const RIGHTTOP = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  width: 92%;
  margin: 0.25rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
const RIGHTBOTTOM = styled(TopComponents)`
  flex-direction: column;
  flex: 40%;
  justify-content: space-between;
  height: 100%auto;
  width: 92%;
  background-color: #132c4e;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

// COMPONENTS

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;
const TLBar = styled.div`
  display: flex;
  width: 170px;
  align-items: center;

  justify-content: center;
`;
const TLData = styled.div`
  display: flex;
  // background-color: green;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
`;
const FRDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const IncommingFlow = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: Column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  p {
    font-family: "Montserrat";
    font-weight: bold;
  }
`;
const DrinkingOutflow = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  border-radius: 15px;
  background-color: white;
  margin: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  p {
    font-family: "Montserrat";
    font-weight: bold;
  }
`;

const Tank = styled.div`
  height: 25px;
  width: 70px;
  background-color: white;
  margin-top: -0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    font-family: "Montserrat";
    font-weight: bold;
  }
`;

const FRD = styled.div`
  display: flex;
  flex: 35%;
  border-radius: 15px;
  flex-direction: column;
  margin: 0.25rem;
  justify-content: space-around;
  background-color: white;
  flex-direction: row;
  box-shadow: none;
`;

const FRDColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: right;
  width: 100%;
  height: auto;
`;
const FRDColumn2 = styled(FRDColumn1)`
  border-left: 2px solid rgb(0, 0, 0, 0.1);
`;

const ValveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
export default HomePage;
