import React from 'react'
import { BsTwitter, BsBehance, BsGithub, BsDribbble, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <>
                <a href="https://behance.net/Nicxzmiller" target="_blank" rel="noreferrer">
                    <BsBehance/>
                </a>
            </>
        </div>

        <div>
            <>
                <a href="https://github.com/Nicxzmiller" target="_blank" rel="noreferrer">
                    <BsGithub/>
                </a>    
            </>
        </div>

        <div>
            <>
                <a href="https://dribbble.com/nicxzmiller" target="_blank" rel="noreferrer">
                <BsDribbble/>
                </a>    
            </>
        </div>

        <div>
            <>
                <a href="https://www.linkedin.com/in/nicholas-chun-markus-0b0136a2/" target="_blank" rel="noreferrer">
                    <BsLinkedin/>
                </a>
            </>
        </div>
        
    </div>
  )
}

export default SocialMedia