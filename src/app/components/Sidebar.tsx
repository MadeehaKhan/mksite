import { Header } from "./Header";
import { Nav, NavDropdown } from "react-bootstrap";

type SidebarProps = {};

export const Sidebar = (props: SidebarProps) => {
  //TODO: edit class dropdown-menu and nav-link to style the thing
  //also move it lower

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Header title="Madeeha Khan" image=""></Header>
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown drop="start" title="Resume" id="navbarDropdown">
        <NavDropdown.Item>Developer</NavDropdown.Item>
        <NavDropdown.Item>Teacher</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey="link-2">About</Nav.Link>
      <Nav.Link eventKey="link-3">Contact</Nav.Link>
    </Nav>
  );
  //TODO: fill about + contact
};
