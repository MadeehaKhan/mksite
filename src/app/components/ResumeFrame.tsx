import { Container, Row, Accordion } from "react-bootstrap";
import resume from "../dicitonaries/resume.json";

type FrameProps = {
  type: string;
};

type ExperienceProps = {
  experience: Experience[];
};

type Experience = {
  title: string;
  duties: string;
  timing: string;
  description: string[];
  organization: string;
  link?: string;
};

const ExperienceFrame = (props: ExperienceProps) => {
  const ListItem = (point: string) => {
    return <li> {point} </li>;
  };
  return (
    <>
      {props.experience.map((item: Experience, i) => {
        let { title, timing, description, duties, organization } = item;
        return (
          <Container key={i}>
            <Row>
              <h5> {organization}</h5>{" "}
            </Row>
            <Row>
              <dl className="dl-horizontal">
                <dt>{title}</dt>
                <dd>{timing}</dd>
              </dl>
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
    <Accordion defaultActiveKey="0">
      <Row>
        <h2>{object.heading.title}</h2>
      </Row>
      <Row>
        <p>{object.heading.intro}</p>
      </Row>
      <Row></Row>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Relevant Experience</Accordion.Header>
          <Accordion.Body>
            <ExperienceFrame experience={object.experience}></ExperienceFrame>
          </Accordion.Body>
        </Accordion.Item>
      <Row></Row>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Core Competencies</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Certificates</Accordion.Header>
      </Accordion.Item>
      </Accordion>
    </Accordion>
  );
};
