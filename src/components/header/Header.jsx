import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/perfil.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou a</h5>
        <h1>Belkiss Lino</h1>
        <h5 className='text-light'>SOFTWARE DEVELOPER</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;