import React, { useState } from 'react'

import styled from 'styled-components'

function Header() {
  const [hamburger, setHamburger] = useState(false)

  const handleToggle = () => {
    setHamburger(!hamburger)
  }

  return (
    <NavWrapper>
      <img src='./images/Logo.svg' alt='Logo' />
      <NavList hamburger={hamburger}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Features</a>
        </li>
        <li>
          <a href='/'>Pricing</a>
        </li>
        <li>
          <Subscribe href='/'>Subscribe</Subscribe>
        </li>
      </NavList>

      <Hamburger onClick={() => handleToggle()}>
        <img src='./images/Hamburger Menu.svg' alt='Menu Icon' />
      </Hamburger>
    </NavWrapper>
  )
}

export default Header

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 4rem;
  position: relative;
`

const NavList = styled.ul`
  display: flex;

  li:not(:last-child) {
    margin-right: 1.2rem;
  }

  a {
    color: #777;
  }

  @media (max-width: 800px) {
    position: absolute;
    top: 8rem;
    left: ${({ hamburger }) => (hamburger ? '0' : '-120%')};
    width: 100%;
    text-align: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.1);
    padding: 1.4rem;
    transition: all 0.3s ease-in-out;

    li {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  }
`

const Subscribe = styled.a`
  padding: 1rem 1.5rem;
  background-color: orange;
  border-radius: 0.3rem;
  color: black !important;
  font-weight: 500;

  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
  }
`

const Hamburger = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`
