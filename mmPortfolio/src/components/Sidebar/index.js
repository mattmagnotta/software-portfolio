import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements.js'


const Sidebar = ( {isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon/>
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink onClick={toggle} to='about'>
                About
              </SidebarLink>
              <SidebarLink onClick={toggle}  to='projects'>
                Projects
              </SidebarLink>
              <SidebarLink onClick={toggle} to='contact'>
                Contact
              </SidebarLink>
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
