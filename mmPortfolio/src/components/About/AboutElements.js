import styled from "styled-components";
export const AboutContainer = styled.div `
  repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  position: relative;
  @media screen and (max-width:1400px){
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 0px;
    position:relative;


`;
export const AboutBg = styled.div `
  display: flex;
  background-color: white;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  flex-direction: column;
  width: 70%;
  min-width:400px;
  max-width: 90%;
  z-index: 10;
  border: solid 1px;
  border-color: lightgrey;
  top: 450px;
  position: relative;
`;
export const HeadingWrapper = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
`;
export const AboutWords = styled.div `
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width:65vw;
  padding:20px
`;
export const HeadersContainer = styled.div `
  display: flex;
  flex-direction: row;
  max-width: 90vw;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;

  }
`;
export const TextBlock = styled.div `
  display: flex;
  just-content: center;
  flex-direction: column;
  margin: 10px 20px;
  width: 95%;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    max-width: 97vw;
    margin:10px auto;
  }
`;

export const Stripe = styled.div `
  width:100vw;
  height:900px;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  right0;
  top:0;
  position:absolute;
  z-index:-20;
}
`;

export const CodeImage = styled.div `
  z-index: 20;
  position: relative;
  display: flex;
`;