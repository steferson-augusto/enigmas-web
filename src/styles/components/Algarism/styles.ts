import styled, { keyframes } from 'styled-components'

export const AlgarismList = styled.ul`
  width: 100vw;
`

const algarismAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  20% { opacity: 1 }
  20% { opacity: 1 }
  100% {
    opacity: 0;
    transform: translateY(-100vh)
  }
`

export interface AlgarismProps {
  fontSize: number
  position: number
  delay: number
  duration: number
  content?: string
}

export const Algarism = styled.li<AlgarismProps>`
  font-size: ${props => props.fontSize}px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  position: absolute;
  bottom: 0;
  left: ${props => props.position}%;
  animation: ${algarismAnimate} 2s infinite, glitch 0.2s infinite;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  opacity: 0;

  @keyframes glitch {
    0% {
      text-shadow: 3px 0 0 #333, -3px 0 0 #ddd;
      filter: blur(0);
    }
    1% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    9% {
      opacity: 1;
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    10% {
      opacity: 0;
      text-shadow: 1px 0 0 #333, -1px 0 0 #000;
      filter: blur(0.3px);
    }
    11% {
      opacity: 1;
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    15% {
      text-shadow: 1px 0 0 #333, -1px 0 0 #000;
      filter: blur(0.3px);
    }
    16% {
      text-shadow: 1px 0 0 #333, -1px 0 0 #000;
      filter: blur(0.3px);
    }
    20% {
      text-shadow: -3px -3px 0 #333, 3px 3px 0 #000;
      filter: blur(0.3px);
    }
    21% {
      text-shadow: 0 0 0 #333, 0 0 0 #000;
      filter: blur(0.3px);
    }
    24% {
      opacity: 1;
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    25% {
      opacity: 0;
      text-shadow: 4px 4px 0 #ddd, -4px -4px 0 #000;
      filter: blur(0.3px);
    }
    26% {
      opacity: 1;
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0.3px);
    }
    29% {
      opacity: 1;
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    30% {
      opacity: 0;
      text-shadow: 3px 3px 0 #ddd, -3px -3px 0 #000;
      filter: blur(0.3px);
    }
    31% {
      opacity: 1;
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0.3px);
    }
    34% {
      opacity: 1;
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0px);
    }
    35% {
      text-shadow: -3px 0 0 #ddd, 3px 0 0 #000;
      filter: blur(0.3px);
    }
    36% {
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0px);
    }
    39% {
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0px);
    }
    40% {
      opacity: 1;
      text-shadow: 5px 5px 0 #ddd, -5px -5px 0 #000;
      filter: blur(0.3px);
    }
    41% {
      opacity: 0;
      text-shadow: 0 0 0 #ddd, 0 0 0 #000;
      filter: blur(0px);
    }
    42% {
      opacity: 1;
      text-shadow: 1px 0 0 #333, -1px 0 0 #000;
      filter: blur(0.3px);
    }
    45% {
      text-shadow: 1px 0 0 #333, -1px 0 0 #000;
      filter: blur(0.3px);
    }
    46% {
      text-shadow: 0 0 0 #333, 0 0 0 #000;
      filter: blur(0.3px);
    }
    49% {
      text-shadow: 0 0 0 #333, 0 0 0 #000;
      filter: blur(0px);
    }
    50% {
      text-shadow: -3px -3px 0 #333, 3px 3px 0 #000;
      filter: blur(0.3px);
    }
    51% {
      text-shadow: 0 0 0 #333, -0 0 0 #ddd;
      filter: blur(0);
    }
    52% {
      text-shadow: 3px 0 0 #333, -3px 0 0 #ddd;
      filter: blur(0);
    }
    53% {
      text-shadow: 0 0 0 #333, -0 0 0 #ddd;
      filter: blur(0);
    }
    54% {
      text-shadow: 0 0 0 #333, -0 0 0 #ddd;
      filter: blur(0);
    }
    55% {
      text-shadow: -3px -3px 0 #333, 3px 3px 0 #ddd;
      filter: blur(0);
    }
    56% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    59% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    60% {
      text-shadow: 3px 0 0 #333, -3px 0 0 #000;
      filter: blur(0.3px);
    }
    61% {
      text-shadow: 0 0 0 #333, 0 0 0 #000;
      filter: blur(0.3px);
    }
    62% {
      text-shadow: 1px 0 0 #333, -1px 0 0 #ddd;
      filter: blur(0);
    }
    65% {
      text-shadow: 1px 0 0 #333, -1px 0 0 #ddd;
      filter: blur(0);
    }
    66% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    69% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    70% {
      text-shadow: -3px -3px 0 #333, 3px 3px 0 #ddd;
      filter: blur(0);
    }
    71% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    74% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    75% {
      text-shadow: 4px 4px 0 #333, -4px -4px 0 #ddd;
      filter: blur(0);
    }
    76% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    77% {
      text-shadow: -3px 0 0 #333, 3px 0 0 #ddd;
      filter: blur(0);
    }
    78% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    99% {
      text-shadow: 0 0 0 #333, 0 0 0 #ddd;
      filter: blur(0);
    }
    100% {
      text-shadow: -3px 0 0 #333, 3px 0 0 #ddd;
      filter: blur(0);
    }
  }
`
