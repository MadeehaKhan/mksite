import React, { useRef, forwardRef, useState } from "react";
import { Accordion, Card, NavLink, useAccordionButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

// The forwardRef is important!!
// Dropdown needs access to the DOM of the Menu to measure it

function CustomToggle(props: any) {
  let { children, eventKey } = props;
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <NavLink
      onClick={decoratedOnClick}
    >
      {children}
    </NavLink>
  );
}

const DropDownListItem = (item: any) => {
  return <li className="list-inline-item"> {item} </li>;
};
const CustomMenu = forwardRef(function MenuControl(props: any, ref) {
  let { children, style, className, "aria-labelledby": labeledBy } = props;

  return (
    <div
      //add ref back
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      <ul className="list-inline">
        {React.Children.toArray(children).map(DropDownListItem)}
      </ul>
    </div>
  );
});

type DropdownProps = {
  children: string;
};

export const SplitDropdown = (props: DropdownProps) => {
  //TODO: create className for this, add list-inline to it
  let { children } = props;
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">{children}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body><CustomMenu></CustomMenu></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
