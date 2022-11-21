import { useState } from "react";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as Logo } from "../assets/eye-logo.svg";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

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
          <p className="about-link" onClick={handleShow}>
            <QuestionMarkCircleIcon className="about-btn" />
            About
          </p>
        </Container>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header>
            <button
              type="button"
              class="btn-close btn-close-white"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="about">
              <div className="about-title">
                <h2>SHOWFLIX</h2>
                <p>Tv Show Search App (v1.0)</p>
              </div>
              <div className="about-info">
                <p>Built with:</p>
                <ul>
                  <li>React (create-react-app)</li>
                  <li>React Router</li>
                  <li>React Context API</li>
                  <li>Axios AJAX Request</li>
                  <li>JavaScript</li>
                  <li>SASS & HTML</li>
                </ul>
              </div>
              <div className="about-footer">
                <p>
                  Made by <span>Patrick Werner</span>
                </p>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
