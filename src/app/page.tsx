"use client" 
import { Container, Row, Col } from "react-bootstrap";
import { Resume } from "./pages/Resume";

const Home = (props: any) => {
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col>sidebar</Col>
            <Col md="7">
              <Resume resumeType="programming"></Resume>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Home;
