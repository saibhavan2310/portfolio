import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I have developed a keen interest in <span className="purple"> Data Analytics </span> and have acquired a solid foundation in the field.
              <br />
              <br />Aspiring Data Analyst with a strong foundation in
              <i>
                <b className="purple"> Python, Excel,  SQL, Power BI and Tableau. </b>
              </i>
              <br />
              <br />
              Experienced in  &nbsp;
              <i>
                <b className="purple">Data analysis, Data visualization, Data modeling, Creating M Formulas, DAX measures, DashBoard Creation </b> and
                for various domains{" "}
                <b className="purple">
                including Retail, Healthcare, Human Resources etc.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for applying my skills in statistical analysis and machine learning with a focus on
              <b className="purple"> Descriptive and Predictive modeling</b> and also my Demonstrated ability to uncover
              <i>
                <b className="purple">
                  {" "}
                  Actionable insights
                </b>
              </i>
              &nbsp; and drive
              <i>
                <b className="purple"> Data-driven decision making. </b>
              </i>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saibhavan2310"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-gubbala-8749551a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saibhavan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
