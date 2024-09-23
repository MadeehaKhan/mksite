import { Header } from "./Header";
import { Nav } from "react-bootstrap";

type SidebarProps = {};

export const Sidebar = (props: SidebarProps) => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Header title="Madeeha Khan" image="../../../public/next.svg"></Header>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link eventKey="link-1">Resume</Nav.Link>
      <Nav.Link eventKey="link-2">About</Nav.Link>
      <Nav.Link eventKey="link-3">Contact</Nav.Link>
    </Nav>
  );
  //TODO: add dropdown for resume, fill about + contact
};
