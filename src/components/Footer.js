import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
      <img src='./images/Logo.svg' alt='Logo' />
      <p>copyright &copy; 2022 Unifeed</p>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`
