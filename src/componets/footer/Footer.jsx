import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Adam Bohling</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/adam.bohling/" rel="noopener"><FaFacebookF /></a>
        <a href="https://www.instagram.com/diluted_renaissance_man/" rel="noopener"><FiInstagram /></a>
        <a href='https://www.linkedin.com/in/adambohling/' rel="noopener"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Elevated Fitness Solutions. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer