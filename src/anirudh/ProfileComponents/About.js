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
               <p>
                  An enthusiastic UI developer, thriving with the never-ending inflow of knowledge and 
                  a firm believer in 'to learn is to grow'. 
                  7.5 years of professional experience in Frontend development, 
                  with a diverse journey of working with a Big scale MNC(Oracle), 
                  to a Growing startup(Jifflenow), to a Mid-sized MNC(Syncron international), 
                  and back to a startup named EclecticIQ.
               </p>
               <p className="">
                  Predominantly worked on ReactJs library for various projects, 
                  including professional and freelance projects, but equally have 
                  been exposed to other tech stacks on UI and backend.
                  You can know more about my professional journey under the
                  <span> <a href="#resume">Resume section</a></span>
               </p>
               <p>
                  If in case, you would be interested to know what I do apart from my professional life,
                  please do check it out under <span> <a href="#portfolio">Passion section</a></span>
               </p>
            </div>
         </div>
      </section>
    </React.Fragment>
  )
}

export default About
