import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='row'>
        <div className='col'>
          <h4 className='footer-title'>About Us</h4>
          <span className='footer-text'><a href='https://miaelena.netlify.app/'>Mia Tapia</a></span><br />
        </div>
        <div className='col'>
          <h4 className='footer-title'>Contact Us</h4>
          <span className='footer-text'><a href='mailto:miaskyelena@gmail.com'>miaskyelena@gmail.com</a> </span>
        </div>
        </div>
    </div>

  )
}

export default Footer