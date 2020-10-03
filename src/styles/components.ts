import styled from 'styled-components'

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`

export const Content = styled.div`
  height: 100%;
  width: 60vw;
  border-left: solid 1px #999;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border: none;
    border-bottom: solid 1px #999;
  }
`
export const EnigmaText = styled.h4`
  text-align: center;
  margin: 10px 15px;
  @media (max-width: 360px) {
    font-size: 12px;
  }
`
export const EnigmaBody = styled.p`
  text-align: center;
  margin: 20px 15px;
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
