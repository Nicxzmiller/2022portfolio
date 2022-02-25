import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss';
import {images} from '../../constants';

const abouts =[
  { 
    title:'Frontend Web Development',
    description:'I am a frontend web developer',
    imgUrl:images.about01
  },
  { 
    title:'UI/UX Design',
    description:'I am a good UI/UX designer',
    imgUrl:images.about03
  },
  { 
    title:'Technical Support Specialist',
    description:'I support technical aspects of applications to provide great customer experience',
    imgUrl:images.about04
  }
]

const About = () => {
  return (
   <>
    <h2 className='head-text'>
    <span>Good Design</span> + <span>Good Development</span> <br /> == <span>Good Business 💰</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div className='app__profile-item' key={about.title + index} whileInView={{opacity:1}} whileHover={{scale:1.1}} transition={{duration:0.5, type:'tween'}}>
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <h2 className='p-text' style={{marginTop:10}}>{about.description}</h2>
        </motion.div>
      ))}
    </div>
   </>
  )
}

export default About