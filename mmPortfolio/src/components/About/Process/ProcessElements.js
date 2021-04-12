import styled from 'styled-components'


export const ProcessContainer = styled.div `
  position:relative;
  top:55vh;
  max-width:1400px;

  @media screen and (max-width:1400px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:30px 0px;
    position:relative;
    top:70vh;
`

export const Contents = styled.div `
  position:relative;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  max-width:70vw
  margin:0 auto;
`

export const Content = styled.div `
  display:flex;
  height:30vh;
  min-height:300px;
  padding:20px;
  max-width:700px;
  flex-direction:column;
  align-items:center;
  justify-conent:center;
  margin:20px;
  border-radius: 53px;
  background: linear-gradient(145deg, #fffff, #ffffff);
  box-shadow:  14px 14px 28px #c7c7c7,
               -14px -14px 28px #ffffff;

`
export const Text = styled.p `
  display:flex;
  max-width:500px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:justfiy;
  font-family:europa;
  margin:20px;
  position:relative;
`