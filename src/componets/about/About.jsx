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
              <img src={Me} alt="About" />
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
              As someone who loves to learn, problem-solve, and try new challenges, I decided during covid it was time for a career change and to start working towards being a software developer. Fast forward two years later, I've completed a full-stack software engineering bootcamp through Springboard. There I learned the fundamentals of programming, design, and architecture. Since completing the boot camp in May of 2023, I've started freelancing website designs and taught myself PHP-based WordPress website design, redux, and angular. I'm currently looking for full time employment as a React Developer.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
  )
}

export default About