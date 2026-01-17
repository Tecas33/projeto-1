import { useState } from "react";
import { Navbar, Call } from "./layuot";
import { Link } from "react-scroll";
import styled from "styled-components";

// Hamburger para mobile com animação X
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background: #06d95a;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: 4px 0px;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  /* Quando menu está aberto, transforma em X */
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

// Menu mobile
const NavMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px; /* ajuste conforme a altura da navbar */
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fcfeff;
    overflow: hidden;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar>
      <h1>
        Fresh<span>Fruit</span>
      </h1>

      <Hamburger
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavMenu open={open}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="produto"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setOpen(false)}
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
        </li>
      </NavMenu>

      <Call
        as={Link}
        to="contato"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={() => setOpen(false)}
      >
        Contato
      </Call>
    </Navbar>
  );
}

export default Header;
