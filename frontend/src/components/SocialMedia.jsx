import React from 'react'
import { BsTwitter, BsBehance, BsGithub, BsDribbble} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsBehance/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsDribbble/>
        </div>
    </div>
  )
}

export default SocialMedia