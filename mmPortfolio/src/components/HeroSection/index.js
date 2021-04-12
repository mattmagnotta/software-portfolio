import React from 'react'
import {animateScroll as Scroll} from 'react-scroll'
import mypic from '../../images/2.svg'
import {HeroContainer, HeroBg,IntroContainer,Button,CodeImage,IntroHack,Words} from './HeroElements'
import AnimatedLogo from '../AnimatedLogo'
import IntroText from '../../images/IntroText.png'
import codingCollection from '../../images/codingCollection.png'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
const HeroElements = () => {

    return (
        <HeroContainer id='home'>
          <HeroBg>
            <Slide></Slide>
            <IntroContainer>
              <AnimatedLogo/>
                <Zoom>
                  <IntroHack >
                    <Words src={IntroText}/>
                    <Button
                      to='about'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={-40 }
                      variant="contained"
                      href="/about"
                      >
                      Learn More
                    </Button>
                </IntroHack>
                </Zoom>
            </IntroContainer>
          </HeroBg>
          <CodeImage>
          <img style={{width:'40vw',maxWidth:'450px', position:'relative',top:'6px'}} src={codingCollection}/>
          </CodeImage>
        </HeroContainer>


    )
}

export default HeroElements
