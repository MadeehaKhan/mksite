"use client";
import { Container, Row, Col } from "react-bootstrap";
import { Resume } from "./pages/Resume";
import { Sidebar } from "./components/Sidebar";

type HomeProps = {};

const Home = (props: HomeProps) => {
  //controls to display middle element
  let activePage: string = "programming";
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Sidebar></Sidebar>
            </Col>
            <Col md="7">
              {activePage == "teaching" ? (
                <Resume resumeType="teaching"></Resume>
              ) : (
                <Resume resumeType="programming"></Resume>
              )}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Home;
