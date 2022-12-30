import React from 'react'
import './About.css'
import aboutImg from '../../images/aboutt.jpg'
const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt=""/>
          </div>
          <div className='about-text'>
          <h2 className='about-title fs-26 ls-1'>About Book_Informant</h2>
          <p className='fs-27'>"Writing and reading decrease our sense of isolation. They deepen and widen and expand our sense of life: They feed the soul. When writers make us shake our heads with the exactness of their prose and their truths, and even make us laugh about ourselves or life, our buoyancy is restored. We are given a shot at dancing with, or at least clapping along with, the absurdity of life, instead of being squashed by it over and over again. It's like singing on a boat during a terrible storm at sea. You can't stop the raging storm, but singing can change the hearts and spirits of the people who are together on that ship." <br/>– Anne Lamott</p>
          <p className='fs-17'>This webpage tells you about the details of a book which you might want to read. It suggest you some books based on your searched keyword.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
