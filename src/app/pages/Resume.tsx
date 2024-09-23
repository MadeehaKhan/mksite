import { Container, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";

type ResumeProps = {
  resumeType: string;
};

export const Resume = (props: ResumeProps) => {
  return (
    <Container>
      <Row> <h1>Madeeha Khan</h1> </Row>
      <Row></Row>
      <ResumeFrame type={props.resumeType}></ResumeFrame>
    </Container>
  );
};
