import React from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as Scroll} from 'react-scroll'
import {Nav,NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                   to='about'
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact={true}
                   offset={-40 }
                   >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Projects'
                  to='projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-40 }>
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Contact'
                  to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-40 }>
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar
