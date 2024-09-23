import { Image, Container } from "react-bootstrap";

type HeaderProps = {
  image: string;
  title: string;
};

export const Header = (props: HeaderProps) => {
  let { title, image } = props;
  return (
    <Container>
      <p>{title}</p>
      <Image src={image} alt="placeholder"></Image>
    </Container>
  );
};
