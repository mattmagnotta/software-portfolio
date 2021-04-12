import styled from 'styled-components'


export const ProjectContainer = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  padding:30px 0px;
  position:relative;
  top:60vh;
  flex-direction:column;


  @media screen and (max-width:1400px){
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 0px;
    position:relative;
    top:40vh;
  }

`
export const HeadingWrapper = styled.div `
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin:0 auto;
  @media screen and (max-width:600px){
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:0% auto 0px auto;

  }
`
export const ProjectWrapper = styled.div `
  margin:0 auto;
  border-radius: 13px;
  background: linear-gradient(145deg, #fffff, #ffffff);
  box-shadow:  14px 14px 28px #c7c7c7,
               -14px -14px 28px #ffffff;
  width:70vw;
  max-width:100vw;


  @media screen and (max-width:1400px){
    padding:10px 10px;
    width:97vw;
    margin-top:300px;
  }
`
export const CardWrapper = styled.div `
  display:flex;
  justify-content:space-evenly;
  flex-wrap:wrap;
  margin:0 auto;

`