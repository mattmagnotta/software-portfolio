import React from 'react'
import ContactForm from './ContactForm.js'
import wolf from '../../images/wolf.svg'
import { SocialIcon } from 'react-social-icons';
import {Stripe,ContactContainer,Contents,FormContainer,HeadingWrapper} from './ContactElements'
const Contact = () => {
    return (
        <ContactContainer id='contact'>
          <Contents>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'200px auto'}}>
            <HeadingWrapper>
              <h1 style={{textAlign:'center',marginBottom:'30px',color:'white'}} className='bold' id='ProjectTitle'>About this website</h1>
                 <p style={{color:'white', maxWidth:'800px'}} className='boldContactP'>This website was initally built in early 2020. As of April 11th,2021, it is now on version 4. This site was built using React and a plethora of libraries, to include Material-ui, React-Router, React-bootstrap, & Email-js. I used Adobe suite to create my SVG's, along with a lot custom css to animate them. As I continue to learn and develop my skills, I will keep updating this website. Thanks for checking it out.</p>
              </HeadingWrapper>
              <FormContainer>
                <h1 style={{textAlign:'center', marginBottom:'10px',color:'white',marginTop:'20px'}} className='bold' id='ProjectTitle'>Get in touch</h1>
                <div  style={{display:'flex',flexDirection:'row',justifyContent:'center'}}id='SocialIcon'>
                  <SocialIcon url="https://www.linkedin.com/in/matthew-magnotta-a74840132/" style={{margin:'0 10px'}}/>
                  <SocialIcon url="https://github.com/mattmagnotta" />
                  <SocialIcon url="https://www.instagram.com/matt.magnotta/?hl=en" style={{margin:'0 10px'}}/>
                  <SocialIcon url="https://aqueous-gorge-46064.herokuapp.com/" style={{}}/>
                </div>
                  <ContactForm/>
                </FormContainer>
                </div>
                <Stripe>
                <img style={{width:'107vw',position:'absolute',left:'-18px',bottom:'700px'}} src={wolf}/>
              </Stripe>
          </Contents>
        </ContactContainer>
    )
}

export default Contact
