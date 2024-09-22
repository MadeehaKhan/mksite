import { Container, Row, Col } from "react-bootstrap";
import { ResumeFrame } from "./components/ResumeFrame";
import { Resume } from "./pages/Resume";

const Home = (props: any) => {
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col>sidebar</Col>
            <Col md="auto">
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
