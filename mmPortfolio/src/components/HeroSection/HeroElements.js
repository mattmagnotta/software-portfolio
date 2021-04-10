import styled from 'styled-components'
import {
  Link as LinkR
} from 'react-router-dom'
import {
  Link as LinkS
} from 'react-scroll'

export const HeroContainer = styled.div `

  repeat:no-repeat;
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0 20px;
  height:1100px;
  posistion: relative;
  z-index:1;
  margin-bottom:100px

`
export const HeroBg = styled.div `
   posistion:absolute;
   display:flex;
   justify-conent:center;
   top:0;
   right:0;
   bottom:0;
   width: 100%;
   height:100%;
   overflow:hidden;

`
export const IntroContainer = styled.div `
  position: relative;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  align-items:center;
  margin:auto;


  @media screen and (max-width:600px){
    position: relative;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    margin:auto;
    padding-bottom:50%
  }


`
export const Button = styled(LinkS)
`
   background:#D931A3;
   border-radius:50px;
   white-space: nowrap;
   padding:14px 48px;
   color:#fff;
   text-decoration:none;
   outline:none;
   border:none;
   cursor:pointer;
   display:flex;
   justify-content:center;
   align-items:center;
   transition: all 0.2s ease-in-out;
   width:50%;
   boxShadow: 0 3px 5px 2px #4083C4;
   margin:10px 25%;
   font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`