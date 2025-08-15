import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Image, CloudinaryContext } from 'cloudinary-react';
import { cloudinaryConfig } from '../constants'

const {cloudName, aboutSectionUrl} = cloudinaryConfig


const DetailedAboutMe = () => {
  return (
    <Segment inverted>
      <div className="row section-head">
        <div className="four columns header-col">
          <CloudinaryContext cloudName={cloudName}>
            <Image publicId={`${aboutSectionUrl}/profile_2`} height="150px" angle="0" />
          </CloudinaryContext>
        </div>
        <div className="eight columns">
          <Header as='h3' style={{color: 'white'}}>My Journey</Header>
          <p style={{color: 'white', fontSize: '14px'}}>
            I usually believe that, every person needs to have an identity apart from his 
            professional life, a passion which keeps our soul alive & something we 
            enjoy doing it, no matter the number of times we repeat.
          </p>
          <p style={{color: 'white', fontSize: '14px'}}>
            My passion towards, wildlife, trekking, birding and photography have grown over past few years.
            I have been assiociated as Trek lead and coordinator for quite a few different groups. 
            Trekking has been an captivating experience for me. Every peak, every summit and every trail 
            had something unique to offer to me in my life. The lessons learnt and the experinces
            gained are treasurable.
          </p>
          <p style={{color: 'white', fontSize: '14px'}}>
            While trekking had offered us some of the beautiful memories, it also paved us a way to 
            connect with nature.
            I am also a wildlife enthusiast and a hobby photographer, having been on multiple wild tours and 
            birding expeditions, along with few other experienced enthusiasts.
            I have also completed my 'Basic ornithology course' from BNHS and 
            have given quite a few talks on Birding.
            Have been associated with a wildlife conservation NGO, <span><a href='https://www.instagram.com/ecovolunteersindia/'>Eco Volunteers India</a></span>
          </p>
          <p style={{color: 'white', fontSize: '14px'}}>
            Now, we also organize our own Wild tours and Birding expeditions.
            Follow us on <span><a href='https://www.instagram.com/windtrailsindia/'>WindTrailsIndia</a></span>
          </p>
        </div>
      </div>
    </Segment>
  )
}

export default DetailedAboutMe
