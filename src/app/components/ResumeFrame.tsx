import { Container, Row, Col } from "react-bootstrap";
import resume from "../dicitonaries/resume.json";

type FrameProps = {
  type: string;
};

type ExperienceProps = {
  experience: any[];
};

type Experience = {
  title: string;
  duties: string;
  timing: string;
  description: any[];
  organization: string;
};

const ExperienceFrame = (props: ExperienceProps) => {
  const ListItem = (point: string) => {
    return <li> {point} </li>;
  };
  return (
    <>
      {props.experience.map((item: Experience, i) => {
        console.log(item);
        let { title, timing, description, duties, organization } = item;
        return (
          <Container key={i}>
            <Row> {organization} </Row>
            <Row>
              <Col>{title}</Col>
              <Col>{timing}</Col>
            </Row>
            <Row>{duties}</Row>
            <Row>
              <ul>{description.map(ListItem)}</ul>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export const ResumeFrame = (props: FrameProps) => {
  let { type } = props;
  let object = type == "teaching" ? resume.teaching : resume.programming;
  return (
    <Container>
      <Row>{object.heading.title}</Row>
      <Row>{object.heading.intro}</Row>
      <Row></Row>
      <Row>core competencies </Row>
      <Row>certificates</Row>
      <Row></Row>
      <Row>
        Relevant Experience
        <ExperienceFrame experience={object.experience}></ExperienceFrame>
      </Row>
      <Row></Row>
      <Row></Row>
    </Container>
  );
};
