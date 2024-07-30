// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   const techs = [
//     { icon: <CgCPlusPlus />, name: "C++" },
//     { icon: <DiJavascript1 />, name: "JavaScript" },
//     { icon: <TbBrandGolang />, name: "Golang" },
//     { icon: <DiNodejs />, name: "Node.js" },
//     { icon: <DiReact />, name: "React" },
//     { icon: <SiSolidity />, name: "Solidity" },
//     { icon: <DiMongodb />, name: "MongoDB" },
//     { icon: <SiNextdotjs />, name: "Next.js" },
//     { icon: <DiGit />, name: "Git" },
//     { icon: <SiFirebase />, name: "Firebase" },
//     { icon: <SiRedis />, name: "Redis" },
//     { icon: <SiPostgresql />, name: "PostgreSQL" },
//     { icon: <DiPython />, name: "Python" },
//     { icon: <DiJava />, name: "Java" },
//   ];

//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {techs.map((tech, index) => (
//         <Col key={index} xs={4} md={2} className="tech-icons">
//           {tech.icon}
//           <div className="tech-name">{tech.name}</div>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Techstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRuby,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPowerbi,
  SiTableau,
  SiMicrosoftexcel,
  SiMicrosoftaccess,
  SiJupyter,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiMicrosoftexcel />, name: "Excel" },
    { icon: <SiMicrosoftaccess />, name: "Access" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiRuby />, name: "Ruby" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
          <div className="tech-name">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
