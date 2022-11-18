import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as Logo } from "../assets/eye-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Navbar>
          <Container>
            <Link to="/" className="logo-container">
              <Logo className="logo" />
              <Navbar.Brand className="nav-brand">SHOWFLIX</Navbar.Brand>
            </Link>

            <Bars3Icon className="nav-btn" onClick={handleShow} />
          </Container>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SHOWFLIX</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="nav-links-container">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
        <Outlet />
      </>
    </div>
  );
};

export default Navigation;
