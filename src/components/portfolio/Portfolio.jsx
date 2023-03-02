import React from 'react';
import './Portfolio.css';
import IMG0 from '../../assets/portfolio0.png';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus projetos recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG0} alt="" />
          </div>
          <h3>Loja de Livros - Com Redux</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/costs' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Costs - Crie seu Projeto</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/costs' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Landing Page</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/landing-page-mabel' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>App Loja de Tênis</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/AppLojaTenis' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>App Finanças</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/AppTelas' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/belkiss-lino/portfolio-belkiss' className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio