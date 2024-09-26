import { Header } from "./Header";
import { Nav, NavDropdown } from "react-bootstrap";

type SidebarProps = {};

export const Sidebar = (props: SidebarProps) => {
  //TODO: edit class dropdown-menu and nav-link to style the thing
  //also move it lower

  //TODO: implement handler to pass prop up to parent (Home) for routing
  const selectHandler = () => {
    console.log("clicked");
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Header title="Madeeha Khan" image=""></Header>
      <Nav.Link eventKey="home" onSelect={selectHandler}>Home</Nav.Link>
      <NavDropdown drop="start" title="Resume" id="navbarDropdown">
        <NavDropdown.Item eventKey="teaching" onSelect={selectHandler}>Developer</NavDropdown.Item>
        <NavDropdown.Item eventKey="programming" onSelect={selectHandler}>Teacher</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey="about" onSelect={selectHandler}>
        About
      </Nav.Link>
      <Nav.Link eventKey="contact" onSelect={selectHandler}>
        Contact
      </Nav.Link>
    </Nav>
  );
  //TODO: fill about + contact
};
