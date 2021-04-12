import styled from "styled-components";
import {
  Link as LinkR
} from "react-router-dom";
import {
  Link as LinkS
} from "react-scroll";

export const HeroContainer = styled.div `
  height: 96vh;
  repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;
export const HeroBg = styled.div `

  display: flex;
  justify-conent: center;
  top: 0;
  right: 0;
  bottom: 100px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ;
`;
export const IntroContainer = styled.div `
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
  margin: 10% auto;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:auto;
    background-color:red;
    margin: 20% auto auto auto;

  }
`;
export const Words = styled.img `
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
  background-color: ;
  margin: 5% 20px;
  width: 60vw;
  max-width: 500px;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
export const Button = styled(LinkS)
`
  background: #1261a0;
  border-radius: 50px;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 50%;
  boxshadow: 0 3px 5px 2px #4083c4;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;
export const CodeImage = styled.div ``;
export const IntroHack = styled.div `
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
  }
`;