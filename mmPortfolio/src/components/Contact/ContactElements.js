import styled from 'styled-components'


export const ContactContainer = styled.div `
  position:absolute;
  margin:60% auto;
  display:flex;
  align-items:end;
  justify-conent:center
`
export const Contents = styled.div `
  width:100vw;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  z-index:10;
`
export const HeadingWrapper = styled.div `
  display:flex;
  flex-direction:column;
  margin:auto;
  max-width:80%;
  justify-content:center;
  border-bottom:1px solid lightgrey;
`
export const FormContainer = styled.div `
  flex-direction:column;
  display:flex;

`
export const Stripe = styled.div `
  position:absolute;
  width:100vw;
  height:900px;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  top:100px;
  left:0;
  z-index:-10;

  }
`