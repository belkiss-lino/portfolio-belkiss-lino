import React from 'react'
import './About.css';
import ME from '../../assets/img-1.jpeg';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h2>SOBRE MIM</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Experiência</h3>
              <h4>+3m ReactJs e React Native</h4>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Certificados</h3>
              <h5>Cursando Eng. de Software - <span>Unopar</span></h5>
              <h5>Curso Técnico em Informática com Ênfase em Programação - <span>POLIMIG</span></h5>
              <h5>Curso Javascript FullStack - <span>OneBitCode</span></h5>
              <h5>Curso Lógica de Programação - <span>Senai</span></h5>
              <h5>Curso Web Moderno - <span>Udemy</span></h5>

            </article>
          </div>
            <p>
            Apaixonada por tecnologia e suas vertentes. 
            Sempre disposta a encarar novos desafios e usar a criatividade para solucionar problemas.
            </p>

            <a href='#contact' className='btn btn-primary'>Vamos conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About