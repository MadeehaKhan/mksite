import { Container, Row, Col } from "react-bootstrap";
import { Resume } from "../pages/Resume";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { HomePage } from "../pages/HomePage";

type BaseComponentProps = {};

const BaseComponent = (props: BaseComponentProps) => {
  //controls to display middle element
  const [activePage, setActivePage] = useState("home");

  const navigateContent = (page: string) => {
    console.log(`going from ${activePage} to ${page}!`);
    setActivePage(page);
  };

  const renderSwitch = (page: string) => {
    switch (page) {
      case "resume":
        return <Resume></Resume>
      case "home":
        return <HomePage></HomePage>;
      case "about":
        return <About></About>;
      case "contact":
        return <Contact></Contact>;
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Sidebar
                handlePageChange={navigateContent}
                currentPage={activePage}
              ></Sidebar>
            </Col>
            <Col md="7">{renderSwitch(activePage)}</Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default BaseComponent;
