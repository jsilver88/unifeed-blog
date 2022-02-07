import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <HeroWrapper>
      <img src='./images/Main Article Image.png' alt='Main Hero' />
      <HeroContentWrapper>
        <h1>Weekly Newsletter: Tweets for Higher Engagements</h1>
        <p>
          In this weekly newsletter, we will be covering ten types of engaging
          tweets. This is the guide if you're just starting out on Twitter.
        </p>
        <ProfileWrapper>
          <img src='./images/User Avatar.png' alt='Jessica Andrews Avatar' />
          <AvatarWrapper>
            <p>Jessica Andrews</p>
            <small>Content Manager</small>
          </AvatarWrapper>
        </ProfileWrapper>
      </HeroContentWrapper>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;

  img {
    width: 26rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #777;
    max-width: 35rem;
    line-height: 1.7;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const HeroContentWrapper = styled.div``

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  img {
    max-width: 3.5rem;
  }
`

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 14px;
    color: black;
    font-weight: 600;
  }

  small {
    color: #777;
  }
`
