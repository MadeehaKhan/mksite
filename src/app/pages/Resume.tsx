import { Container, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";

type ResumeProps = {
  resumeType: string;
};

export const Resume = (props: ResumeProps) => {
  return (
    <Container>
      <Row></Row>
      <ResumeFrame type={props.resumeType}></ResumeFrame>
    </Container>
  );

  //TODO: add memoization on resumetype
};
