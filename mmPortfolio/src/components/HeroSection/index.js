import React from 'react'
import {animateScroll as Scroll} from 'react-scroll'
import mypic from '../../images/2.svg'
import {HeroContainer, HeroBg,IntroContainer,Button} from './HeroElements'
import AnimatedLogo from '../AnimatedLogo'
import IntroText from '../../images/IntroText.png'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
const HeroElements = () => {
    return (
        <HeroContainer id='home'>

          <HeroBg>
            <Slide></Slide>
            <IntroContainer >
              <AnimatedLogo/>
              <div style={{display:'inline-block', justifyContent:'center' ,width:'100%', maxWidth:'700px',}}>
                <Zoom>

                  <img src={IntroText} style={{width:'100%',height:'50%' , padding:'0 50px' }}/>
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
                </Zoom>
              </div>
            </IntroContainer>
          </HeroBg>
        </HeroContainer>
    )
}

export default HeroElements
