import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mma from "../../Assets/Projects/mma.jpg";
import ps from "../../Assets/Projects/ps.png";
import hra from "../../Assets/Projects/hra.png";
import bikesales from "../../Assets/Projects/bsa.jpg";
import usa from "../../Assets/Projects/usa.png";
import mgh from "../../Assets/Projects/MGH.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikesales}
              isBlog={false}
              title="Bike Sales Analysis"
              description="Conducted in-depth analysis of bike sales data to optimize product mix and market strategy. Identified bikes as the primary revenue driver, contributing to 92% of profit. Uncovered significant regional sales disparities, with the US generating 34% more orders than other regions."
              ghLink="https://github.com/saibhavan2310/AD-Bike-Sales-Analysis-POWER-BI"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiMmJkNWI5YmEtY2U4NS00M2EzLTkyMGMtNDQ2MTc3ZGZkMWQ1IiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mgh}
              isBlog={false}
              title="Massachusetts General Hospital"
              description="Performed exploratory data analysis (EDA) on medical procedure data to identify trends, patterns, and cost drivers. Analyzed procedure types, costs, and insurance coverage, revealing electrical cardioversion as the most common procedure and Medicare as the primary insurance provider."
              ghLink="https://github.com/saibhavan2310/massachusetts-general-hospital-POWER-BI-Analysis"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiOGZlZjIzYWUtNzIzMC00MjBhLWJmYzUtOTBiOTNjMjBlMzc5IiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hra}
              isBlog={false}
              title="HR Analytics"
              description="Engineered a custom function to streamline data integration and normalization processes. Identified a 15% increase in work-from-home requests and a 3% rise in sick leave occurrences, highlighting potential HR challenges."
              ghLink="https://github.com/saibhavan2310/HR_Analytics-PowerBI"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiOTVhYjE0OWYtM2FhOC00NWJjLWExMGQtMjVhN2FhNThlMTZkIiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mma}
              isBlog={false}
              title="Maven Market Sales Analysis"
              description="Developed interactive dashboards to visualize key business metrics for Maven Market. Conducted sales analysis across North America, identifying the USA as the top-performing market with a 51.08% sales advantage. Quantified product profitability, highlighting Plato brand's substantial 63.55% profit margin."
              ghLink="https://github.com/saibhavan2310/Maven-Market-Analysis-EXCEL-POWER-BI"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiZDk0NmZkYzUtZTk4OC00MTlhLWE3NjEtNWFiMjdlNDZlZDBkIiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usa}
              isBlog={false}
              title="US Online Store Analysis"
              description="Analyzed online store sales data to identify top-performing product categories and geographic markets. Determined technology as the top revenue generator, capturing 38% of total sales. Identified New York City as a key market with substantial profit and pinpointed peak sales quarters for optimised marketing efforts"
              ghLink="https://github.com/saibhavan2310/Sale-Analysis-SQL-and-Python"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiNGE5ODY1MTAtZGM3Mi00NTQ0LTliY2YtYWE4YzhiZWQ2YWRlIiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ps}
              isBlog={false}
              title="Pizza Sales"
              description="This dashboard offers a comprehensive snapshot of pizza sales, highlighting key metrics like total revenue of $125,000, 5,000 orders, and an average order value of $25. It reveals sales trends, top-selling pizzas like Margherita and Pepperoni, and customer preferences, empowering data-driven decisions to optimize sales and marketing efforts. By identifying peak sales periods and customer segmentation, businesses can tailor strategies for increased profitability."
              ghLink="https://github.com/saibhavan2310/Pizza-Sales-Analysis-SQL-Power-BI"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiYmE5ZmJhYmEtN2JiZi00NWQ5LWJlNDUtOGE0NDk3NjRmMmE2IiwidCI6ImYzYTFhZDM2LWQ4YzItNDQ5Ni04MWVkLWUzMDgzMjhlYTQwNCJ9"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
