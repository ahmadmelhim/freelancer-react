import React from 'react'
import style from './hero.module.css'
import logo from '../../assets/avataaars.svg'

export default function Hero() {
  return (
    <div className={`${style.hero} text-center py-5 text-white`}>
      <img src={logo} alt="Hero Logo" className="w-25" />
      <h1 className="fw-bold mt-4">START BOOTSTRAP</h1>
      <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
