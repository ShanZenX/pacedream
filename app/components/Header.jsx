"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import "@/app/globals.css";
import { GiShoppingBag } from "react-icons/gi";
import { Raleway } from 'next/font/google';

const fontRaleway = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});
export default function Header() {
  return (
    <Navbar expand="lg" className={`bg-transparent fixed-top  !justify-center ${fontRaleway.className}`}>
      <Container className="flex items-center w-full m-3 ">
        <div className="w-1/5">
          <Navbar.Brand href="#home" className="mx-4 text-white">
            PeaceFurn
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow w-3/5">
          <Nav className="flex justify-center w-full space-x-4 !text-white ">
            <NavDropdown
              title="Furniture"
              id="basic-nav-dropdown"
              className="!text-white nav-l !bg-transparent"
            >
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#home" className="mx-4 text-white">
              Shop
            </Nav.Link>
            <Nav.Link href="#link" className="mx-4 text-white">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="mx-4 text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="w-1/5 text-right">
          <Nav className="flex justify-end">
            <Nav.Link href="#link" className="mx-4 text-white">
            <GiShoppingBag className="text-2xl" />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
