import styled from 'styled-components'

export const AboutContainer = styled.div`
  repeat:no-repeat;
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:30px 0px;
  height:1000px;
  posistion: relative;
  z-index:4;
`
export const AboutBg = styled.div`
 width: 100%;
 display:flex;
 flex-direction:column;
 background: rgba( 255, 255, 255, 0.05 );
 box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
 border-radius: 10px;
 border: 1px solid rgba( 255, 255, 255, 0.18 );
 width:90vw;
`
export const HeadingWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin:20px auto;


`
export const AboutWords = styled.div`
 display:flex;
 margin:0 auto;
 justify-content:center;

`
export const HeadersContainer = styled.div`
  display:flex;
  flex-direction:row;
  max-width:90vw;
  margin:0 auto;
  justify-content:center;
  align-items:flex-start;


  @media screen and (max-width:1300px){
    display:flex;
    flex-direction:column;
    max-width: 95vw;
  }

`


export const TextBlock = styled.div`
  display:flex;
  just-conent:center;
  flex-direction:column;
  margin:0 auto;
  padding:10px 20px;


`
export const TextBlockHack = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin:0 auto;
  padding:10px 20px;

  @media screen and (max-width:970px){
    display:flex;
    just-conent:center;
    flex-direction:column;
    margin:0 auto;
    padding:10px 20px;
  }

`
