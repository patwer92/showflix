import { useState } from "react";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as Logo } from "../assets/eye-logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar sticky="top">
        <Container fluid>
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
            <div className="about">
              <h3 className="about-title">ABOUT</h3>
              <div className="about-info">
                <p>Tv Show Search App (v1.0)</p>
                <div>
                  <p>Built with:</p>
                  <ul>
                    <li>React (create-react-app)</li>
                    <li>SCSS & HTML</li>
                    <li>Axios AJAX Request</li>
                    <li>React Router</li>
                    <li>React Context API</li>
                  </ul>
                </div>
              </div>
              <p>Made with ❤️ by Patrick Werner</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
