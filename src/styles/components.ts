import styled, { keyframes } from 'styled-components'

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-height: 420px) {
    height: auto;
  }
`

export const AdTop = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: solid 1px yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const AdRight = styled.div`
  height: 100%;
  width: 100px;
  border-left: solid 1px yellow;
  border-right: solid 1px yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 440px) {
    width: 100%;
    height: 100px;
    border: none;
  }
  @media (max-height: 420px) {
    height: 100vh;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 60vw;
  border-left: solid 1px #999;
  max-height: calc(100vh - 200px);
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border: none;
    border-bottom: solid 1px #999;
  }
  @media (max-height: 420px) {
    max-height: 100vh;
  }
`
export const EnigmaText = styled.h4`
  text-align: center;
  margin: 10px 15px;
  @media (max-width: 360px) {
    font-size: 12px;
  }
`
export const EnigmaDescription = styled.p`
  text-align: center;
  margin: 20px 15px;
`

export const EnigmaImage = styled.img`
  object-fit: cover;
  max-height: 300px;
  @media (min-height: 421px) {
    max-height: calc(100vh - 200px);
  }
`

export const PathEnigma2 = styled.path`
  stroke-dasharray: 500;
  stroke-dashoffset: 1000;
  animation: dash 3s linear infinite;

  @keyframes dash {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

const glitchAnimation = keyframes`
  0% { background-position: -3px -3px; }
  5% { background-position: 0px 0px; }
  10% { background-position: -3px -3px; }
  15% { background-position: 0px 0px; }
  30% { background-position: 3px 3px; }
  35% { background-position: 0px 0px; }
  40% { background-position: 3px -3px; }
  45% { background-position: 0px 3px; }
  50% { background-position: -3px 0px; }
  55% { background-position: -3px -3px; }
  60% { background-position: -3px -3px; }
  65% { background-position: -3px -3px; }
  70% { background-position: 0px 0px; }
  75% { background-position: -3px -3px; }
  80% { background-position: 0px 0px; }
  85% { background-position: 3px 3px; }
  90% { background-position: 0px 0px; }
  95% { background-position: -3px -3px; }
  100% { background-position: -3px -3px; }
`

export const GlitchBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background: url('/images/bgnoise.png') left top;
  background-size: cover;
  background-color: #222;
  background-blend-mode: difference;

  &:after {
    content: '';
    background: url('/images/bgnoise.png') left top;
    background-size: cover;
    background-color: darkred;
    background-position: 0 0;
    background-blend-mode: color-burn;
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    &:after {
      animation: ${glitchAnimation} 2s infinite;
    }
  }
`

export const GlitchButton = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  width: 200px;
  position: relative;
  background: #121214;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  padding: 8px 30px;
  font-size: 21px;
  letter-spacing: 0.35em;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  transition: all 0.2s ease;
  margin: auto;
  z-index: 1;

  @keyframes glitch-test {
    0% {
      clip: rect(-3px, 600px, 0px, 0px);
    }
    5.88235% {
      clip: rect(0px, 600px, 0px, 0px);
    }
    11.76471% {
      clip: rect(-3px, 600px, 0px, 0px);
    }
    17.64706% {
      clip: rect(-3px, 600px, 0px, 0px);
    }
    23.52941% {
      clip: rect(100px, 600px, 100px, 0px);
    }
    29.41176% {
      clip: rect(0px, 600px, 600px, 0px);
    }
    35.29412% {
      clip: rect(100px, 600px, 0px, 0px);
    }
    41.17647% {
      clip: rect(0px, 600px, 600px, 0px);
    }
    47.05882% {
      clip: rect(100px, 600px, 0px, 0px);
    }
    52.94118% {
      clip: rect(-3px, 600px, 0px, 0px);
    }
    58.82353% {
      clip: rect(100px, 450px, 100px, 0px);
    }
    64.70588% {
      clip: rect(0px, 450px, 0px, 0px);
    }
    70.58824% {
      clip: rect(100px, 450px, 100px, 0px);
    }
    76.47059% {
      clip: rect(0px, 450px, 0px, 0px);
    }
    82.35294% {
      clip: rect(0px, 450px, 0px, 0px);
    }
    88.23529% {
      clip: rect(0px, 450px, 0px, 0px);
    }
    94.11765% {
      clip: rect(0px, 450px, 0px, 0px);
    }
    100% {
      clip: rect(0px, 450px, 0px, 0px);
    }
  }

  &:before,
  &:after {
    content: '1010100';
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 0;
    width: 100%;
    -webkit-clip: rect(0px, 0px, 0px, 0px);
    clip: rect(0px, 0px, 0px, 0px);
    background: #fff;
    color: #000;
  }

  &:before {
    left: -3px;
    top: -2px;
    text-shadow: 2px 0 #fff;
    box-shadow: 2px 0 #fff;
  }

  &:after {
    left: 2px;
    bottom: -2px;
    text-shadow: -1px 0 #fff;
    box-shadow: -1px 0 #fff;
  }

  &:hover {
    background: white;
    color: black;
  }

  &:hover:before {
    animation: glitch-test 1.5s infinite linear alternate-reverse;
  }

  &:hover:after {
    animation: glitch-test 2s infinite linear alternate;
  }
`
