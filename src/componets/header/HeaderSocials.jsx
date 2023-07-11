import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <h5>SOCIAL</h5>
        <h5>MEDIA</h5>
        <a href='https://www.linkedin.com/in/adambohling/' rel="noopener"><BsLinkedin/></a>
        <a href='https://github.com/abohling' rel="noopener"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials