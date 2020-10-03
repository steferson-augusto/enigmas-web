import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: solid 1px #666;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  width: 400px;
  height: 30px;
  padding: 0 2px;
  border-radius: 7px;
  font-size: 18px;
  outline: none;
  border: solid 3px #555;
  transition: ease-in-out, width 0.35s ease-in-out;
  &:focus {
    width: 450px;
    border: solid 3px #aaa;
  }

  @media (max-width: 570px) {
    width: 80%;
    &:focus {
      width: 95%;
    }
  }

  @media (max-width: 200px) {
    font-size: 13px;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  background-color: #121214;
  border: 2px solid #fff;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 5px 10px;
  width: 135px;
  cursor: pointer;
  margin: 5px;
  opacity: 0.6;
  transition: all 0.5s;
  box-shadow: 0 0 4px #fff;
  background-position: center;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;

    &:after {
      content: '\\bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }

  &:hover {
    opacity: 1;
    background: #121214 radial-gradient(circle, transparent 1%, #121214 1%)
      center/15000%;
    span {
      padding-right: 25px;

      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }

  &:active {
    background-color: #444;
    background-size: 100%;
    transition: background 0s;
  }
`
