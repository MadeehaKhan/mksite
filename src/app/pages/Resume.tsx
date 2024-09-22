import { Container, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";

type ResumeProps = {
  resumeType: string;
};

export const Resume = (props: ResumeProps) => {
  return (
    <Container>
      <Row> header </Row>
      <ResumeFrame type={props.resumeType}></ResumeFrame>
    </Container>
  );
};
