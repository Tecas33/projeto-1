import { useState } from "react";
import { Navbar, Call } from "./layuot";
import { Link } from "react-scroll";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Botão do menu
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #06d95a; /* verde */

  @media (max-width: 768px) {
    display: block;
  }
`;

// Menu mobile
const NavMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px; /* altura da navbar */
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #fcfeff;
    overflow: hidden;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in-out;
    text-align: center;
    padding: ${({ open }) => (open ? "1rem 0" : "0")};
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar>
      <h1>
        Fresh<span>Fruit</span>
      </h1>

      {/* Botão Hamburger / X */}
      <HamburgerButton onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </HamburgerButton>

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
