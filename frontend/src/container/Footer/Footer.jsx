import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
const [formData, setFormData] = useState({name:'', email:'', message:''})
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false)

const {name, email, message } = formData;
const handleChangeInput = (e) => {
  const { name, value} = e.target;
  setFormData({...formData, [name]: value})
}

const handleSubmit = () => {
  setLoading(true);

  const contact = {
    _type:'contact',
    name:name,
    email:email,
    message:message,
  }

  client.create(contact).then(()=>{
    setLoading(false);
    setIsFormSubmitted(true);
  })
}

  return (
    <>
      <h2 className='head-text'>Have a chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="eamil" />
          <a href="mailto:nicxzmiller2@gmail.com" className='p-text'>nicxzmiller2@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="eamil" />
          <a href="tel: +356 999 399 20" className='p-text'>+356 999 399 20</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" name="name"  placeholder='Your Name' value={name} onChange={handleChangeInput}/>
          <input className='p-text' type="email" name="email"  placeholder='Your Email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea className='p-text' placeholder='Message' value={message} name="message" onChange={handleChangeInput} id="" rows="" cols=""/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch.</h3>
      </div>}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')