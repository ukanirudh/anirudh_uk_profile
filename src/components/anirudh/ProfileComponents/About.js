'use client';

import React from 'react'
import {cloudinaryConfig} from '../constants'
import {Image, CloudinaryContext} from 'cloudinary-react';

const {cloudName, aboutSectionUrl} = cloudinaryConfig

const About = () => {
  return (
    <React.Fragment>
      <section id="about">
         <div className="row">
            <div className="three columns">
               <CloudinaryContext cloudName={cloudName}>
                  <Image publicId={`${aboutSectionUrl}/profile`} width="100%" height="150px" />
               </CloudinaryContext>
            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p className="about-me-info">
                  An enthusiastic Frontend Engineer, thriving with the never-ending inflow of knowledge and 
                  a firm believer in 'to learn is to grow'. 
                  9 years of professional experience in Frontend development, 
                  with a diverse journey of working with a large-scale companies, multiple startups and product-based
                  companies, building several products from scratch.
               </p>
               <p className="about-me-info">
                  Predominantly worked on ReactJs library for various projects, 
                  including professional and freelance projects, but equally have 
                  been exposed to other tech stacks on UI and backend.
                  You can know more about my professional journey under the
                  <span> <a href="#resume">Resume section</a></span>
               </p>
               <p className="about-me-info">
                  If in case, you would be interested to know what I do apart from my professional life,
                  please do check out the <span> <a href="#portfolio">Passion section</a></span>
               </p>
            </div>
         </div>
      </section>
    </React.Fragment>
  )
}

export default About
