import React from 'react'
import Card from '../AnimatedScard/Card'
import avatar from '../../images/avatars.png'
import proficiency from '../../images/proficiency.svg'
import {AboutContainer, AboutBg,HeadingWrapper,AboutWords,HeadersContainer,TextBlock,TextBlockHack} from './AboutElements'
import Zoom from 'react-reveal/Zoom'



const About = () => {
    return (
        <AboutContainer id='about'>
          <Zoom  >
          <AboutBg>
            <HeadingWrapper>
              <h1> Wow! A whole section just about me...</h1>
              <img src={avatar} style={{height:'300px',width:'300px',margin:'20px auto'}}/>
            </HeadingWrapper>
              <AboutWords>

              <HeadersContainer>
                <TextBlock>
                  <h1 style={{textAlign:'center'}}>Who?</h1>
                      <p style={{textAlign:'justify',maxWidth:'150vw'}}>I am a software development consultant focusing on web development & design. I am devoted to figuring how to produce the best product for you and you're team. I am currently working at PDX Code Guild. In my off-time you can find me somewhere in the backcountry with a camera & my dog. </p>
                </TextBlock>
                <TextBlock>
                  <h1 style={{textAlign:'center'}}>What?</h1>
                      <p style={{maxWidth:'150vw',textAlign:'justify'}}>I enjoy building things, especially when I get to build them with a computer. I mainly work on the front-end with Javascript and React, but, I can still implement back-end things, like servers and RESTful-API's with both JavaScript & Python. Im extremely passionate about design and keep up to date with modern web trends.
                      </p>
                </TextBlock>
                <TextBlock>
                  <h1 style={{textAlign:'center'}}>Why?</h1>
                    <p style={{maxWidth:'150vw',textAlign:'justify'}} className="boldP">
                      I have many reasons why, but the main one is having a deep passion for technology. Life to me isnt about
                      materialistic things, its about having skill. I like to solve complex problems, "it always seems impossible til its done" - Nelson Mendela.
                    </p>
                </TextBlock>
              </HeadersContainer>
            </AboutWords>
              <img src={proficiency} style={{width:'70%',margin:'50px auto'}}/>
          </AboutBg>

        </Zoom>
        </AboutContainer>
    )
}

export default About
