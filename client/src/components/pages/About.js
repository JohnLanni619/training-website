import React from "react";
import headshot from '../../assets/csheadshot.jpg';
import Mission from '../Mission';

const About = () => {
    return(
        <main>
            <Mission/>
            <section id='about'>
                <h1>Who am I?</h1>
                <div className='about-container'>
                   <img src={headshot} className='about-item' alt='headshot'/>
                   <p className='about-item'>I'm an aspiring full stack web developer. I just finished the Rutgers Coding Bootcamp in September. I want to develop applications that both solve problems and enhance the user's experience. I'd like to work in an environment that facilitates continuous learning and development. As a former personal training manager, I'm proficient in working with a team towards a common goal. When I'm not coding, I'm working as a personal trainer and spending time with my three year old son.</p>
                </div>
            </section>
            
        </main>
    )
};

export default About;