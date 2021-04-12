import styled from 'styled-components'


export const ProjectContainer = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  padding:30px 0px;
  position:relative;
  top:60vh;


  @media screen and (max-width:1400px){
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 0px;
    position:relative;
    top:30vh;


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
  background: rgba( 255, 255, 255, 0.05 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
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