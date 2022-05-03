import React from "react";
import styled from "styled-components";
import "./About.css";

const AboutUs = () => {
  return (
    <Container>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h4>Semjong Integrated Water Supply Pilot Project</h4>
              <p class="description">
                Semjong water project is the second pilot project of De-suung
                national service on improving and expanding water supply and was
                launched in Semjong Gewog in Tsirang on 25th November 2020. The
                project aims to alleviate current drinking water problems as
                well as provide water for irrigation in Dangreygang Chiwog{" "}
                <br />
                The main components of the project include watershed
                conservation, construction of a large reservoir tank for dryland
                irrigation, piloting micro-irrigation technologies such as drips
                and sprinklers, automation system, and improved technology for
                crop production
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div class="face face2">
            <h1>About Semjong</h1>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h4> Project Details:</h4>
              <p class="description">
                Reservoir Capacity: 700,000 Litres for drinking and dry land
                irrigation
                <br />
                households/population benifitted: 69 households, 300 people
                (approx)
                <br />
                Irrigation Area (Land) covered: 70 Acres which is divided into 8
                zones
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div class="face face2">
            <h1>Our Services</h1>
          </div>
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

export default AboutUs;
