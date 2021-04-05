import React from 'react'
import Card from '../AnimatedScard/Card'
import avatar from '../../images/avatars.png'
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
                      <p style={{textAlign:'justify',maxWidth:'150vw'}}>I am a software development consultant focusing on web development & design. I am currently accepting proposals for work. Email me at mattmag18@gmail.com to get started. I have devoted most of my time learning how to produce the best product for you and you're team. In my off-time you can find me somewhere in the backcountry with a camera & my dog.</p>
                </TextBlock>
                <TextBlock>
                  <h1 style={{textAlign:'center'}}>What?</h1>
                      <p style={{maxWidth:'150vw',textAlign:'justify'}}>Well I can do lots of things, do you need someone to design the front-end? I can do it. Need someone to handle the back-end? I can do it. Need someone who dabbles in both? I can do it. I am your GO-TO-GUY. The software industry is vast. I love to learn;  especially new technologies that will contribute to the success of a project.
                      </p>
                </TextBlock>
                <TextBlockHack>
                  <h1 style={{textAlign:'center'}}>Why?</h1>
                    <p style={{maxWidth:'150vw',textAlign:'justify'}} className="boldP">
                      I have many reasons why, but the main one is having a deep passion for technology. Life to me isnt about
                      materialistic things, its about having skill. I enjoy building things, especially when I get to build them with a computer. 
                      code.
                    </p>
                </TextBlockHack>
              </HeadersContainer>
            </AboutWords>

          </AboutBg>
        </Zoom>
        </AboutContainer>
    )
}

export default About
