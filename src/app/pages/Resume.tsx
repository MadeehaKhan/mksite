import { Container, Nav, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";
import { useState } from "react";

type ResumeProps = {};

export const Resume = () => {
  //TODO: style nav
  const [resumeControl, setResumeControl] = useState("");

  const handleTab = (eventKey: any) => {
    if (eventKey != resumeControl) setResumeControl(eventKey);
  };

  //TODO: add link to pdf of full resume
  return (
    <Container>
      <Nav
        variant="unerline"
        defaultActiveKey="programming"
        onSelect={(eventKey) => handleTab(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="programming">Developer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="teaching">Teacher</Nav.Link>
        </Nav.Item>
      </Nav>
      <ResumeFrame type={resumeControl}></ResumeFrame>
      <Row></Row>
    </Container>
  );
};
