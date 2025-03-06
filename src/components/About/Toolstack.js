import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import coznizant from "../../Assets/cog_prim_lg_hrz_r_rgb_rev_2022.png"
import srm from "../../Assets/srm.png"

function Toolstack() {
  return (
    <Container >

<h1 style={{ fontSize: "2.6em" }}>
              Previous <span className="purple"> Employment </span> 
            </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={coznizant} className="img-fluid" alt="cognizant" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={srm} className="img-fluid" alt="srm" />
      </Col>
     
      
    </Row>
    </Container>
  );
}

export default Toolstack;
