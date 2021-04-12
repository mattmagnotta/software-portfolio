import React from 'react'
import {ProjectContainer,HeadingWrapper,ProjectWrapper} from './ProjectElements'
import ProjectCards from './ProjectCards'
import Project from '../../images/Project.svg'
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    return (
        <ProjectContainer id='projects'>
          <Zoom>
            <ProjectWrapper>
              <HeadingWrapper>
                <h1 style={{textAlign:'center',marginBottom:'10px'}}> Projects of mine</h1>
              </HeadingWrapper>
              <ProjectCards/>
            </ProjectWrapper>
          </Zoom>
        </ProjectContainer>
    )
}

export default Projects
