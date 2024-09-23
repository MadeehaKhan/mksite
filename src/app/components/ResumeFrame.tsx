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
      <Row>
        <h3>Relevant Experience</h3>
        <ExperienceFrame experience={object.experience}></ExperienceFrame>
      </Row>
      <Row></Row>
      <Row>
        <h4>Core Competencies</h4>
      </Row>
      <Row>
        <h4>Certificates</h4>
      </Row>
      <Row></Row>
      <Row></Row>
    </Accordion>
  );
};
