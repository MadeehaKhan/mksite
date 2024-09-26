import { useState } from "react";
import { Header } from "./Header";
import { Nav, NavDropdown } from "react-bootstrap";

type SidebarProps = {
  currentPage: string;
  handlePageChange(key: string): void;
};

export const Sidebar = (props: SidebarProps) => {
  //TODO: edit class dropdown-menu and nav-link to style the thing
  //also move it lower
  let { currentPage, handlePageChange } = props;

  const [activePage, setActivePage] = useState(currentPage);
  const handleSelect = (eventKey: any) => {
    setActivePage(eventKey);
    handlePageChange(eventKey);
  };

  return (
    <Nav
      onSelect={(eventKey) => handleSelect(eventKey)}
      defaultActiveKey="/home"
      className="flex-column"
    >
      <Nav.Link eventKey="home">Home</Nav.Link>
      <NavDropdown drop="start" title="Resume" id="navbarDropdown">
        <NavDropdown.Item eventKey="programming">Developer</NavDropdown.Item>
        <NavDropdown.Item eventKey="teaching">Teacher</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey="about">About</Nav.Link>
      <Nav.Link eventKey="contact">Contact</Nav.Link>
    </Nav>
  );
  //TODO: fill about + contact
};
