import React from "react";
import { Col, Row } from "react-bootstrap";

const skills = [
  "Data Transformation",
  "Data Manipulation",
  "Data Mining",
  "Data Visualization",
  "ETL",
  "Report Generation",
  "Business Intelligence",
  "Project Management",
  "Statistics Analysis (Hypothesis testing, A/B Testing)",
  "Predictive Modeling",
  "Snowflake schema",
  "Star Schema"
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={12} md={6} lg={4} className="tech-skill">
          <div className="skill-box">{skill}</div>
        </Col>
      ))}
    </Row>
  );
}



export default Toolstack;
