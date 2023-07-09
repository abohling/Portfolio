import React from 'react'
import './about.css'
import Me from '../../assests/me-lake.jpeg'
import {FaAward} from 'react-icons/fa'
import {LiaUsersCogSolid} from 'react-icons/lia'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={Me} alt="About Image" />
            </div>

          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward  className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className='about__card'>
                <LiaUsersCogSolid  className='about__icon'/>
                <h5>Clients</h5>
                <small>20+ over the United States</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary  className='about__icon'/>
                <h5>Projects</h5>
                <small>20 completed projects</small>
              </article>

            </div>
            <p>
              Something has to go here aobut me. Not sure what but his is a place holder text til I can figure it out.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
  )
}

export default About