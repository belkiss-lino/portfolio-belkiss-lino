import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/belkiss-lino/' target="_blank"><BsLinkedin className='header__socials-icon' /></a>
        <a href='https://github.com/belkiss-lino' target="_blank"><FaGithub className='header__socials-icon' /></a>
    </div>
  )
}

export default HeaderSocials