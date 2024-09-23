"use client" 
import { Container, Row, Col } from "react-bootstrap";
import { Resume } from "./pages/Resume";
import { Sidebar } from "./components/Sidebar";

const Home = (props: any) => {
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col><Sidebar></Sidebar></Col>
            <Col md="7">
              <Resume resumeType="teaching"></Resume>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Home;
