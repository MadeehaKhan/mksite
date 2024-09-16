import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <main>
    <Container>
      <Row>
        <Col></Col>
        <Col lg="3">sidebar</Col>
        <Col md="auto">content</Col>
        <Col></Col>
      </Row>
    </Container>
    </main>
    </div>
  );
}
