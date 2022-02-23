import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app_flex'>
      <motion.div className='app__header-info' whileInView={{x: [-100, 0], opacity:[0, 1]}} transition={{duration:0.5}}>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Nicholas</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header