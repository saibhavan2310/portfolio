import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Bhavan Gubbala </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am working as a Freelancer as a Data Analyst.
            <br />
            I have completed B.E in Computer Sciecne and Engineering at Sathyabama Institute of Science and Technology with a CGPA of 9.15/10.
            <br />
            <br />
            Apart from analytics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Without Data, you're just a person with an opinion"{" "}
          </p>
          <footer className="blockquote-footer">W. Edwards Deming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
