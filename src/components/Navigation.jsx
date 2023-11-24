import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import user from "../assets/user.png";
import logo from "../assets/icon8.jpg";
import "../styles/navigation.scss";

const Navigation = ({ isAuth, signUserOut }) => (
  <Navbar
    collapseOnSelect
    expand="lg"
    className="bg-body-tertiary"
    id="container"
    
  >
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img className="picture" src={logo} alt="Logo" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          {isAuth ? (
            <>
              <NavDropdown title="Invest" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/investor">
                  Investor
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/investee">
                  Investee
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Marketplace" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/community-market">
                  Buyer
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/public-market">
                  Seller
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : null}
        </Nav>
        <div>
          {isAuth ? (
            <button className="btn btn-primary" onClick={signUserOut}>
              Logout
            </button>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                columnGap: "10px",
              }}
            >
              {/* <button
                className="btn btn-primary"
                onClick={signUserOut}
              ></button> */}
              <Nav.Link as={Link} to="/signin" className="btn btn-primary">
                Login
              </Nav.Link>
            </div>
          )}
        </div>
        {/* <Nav.Link as={Link} to="/profile">
          <img src={user} alt="Logo" height="30" />
        </Nav.Link> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
