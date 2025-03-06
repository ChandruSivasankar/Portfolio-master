import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fakeprofile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span> 
            </h1>
            <p className="home-about-body">
              I am a seasoned Solution Architect, I excel at translating complex business needs into robust, 
              scalable, and future-proof technology solutions
              <br />
              <br />I am fluent in Cloud platforms, Intelligent Automation, Devops
              <i>
                <b className="purple"> Python, Javascript, C#  and Go. </b>
              </i>
              <br />
              <br />
            
              <br />
              <br />
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
           
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
