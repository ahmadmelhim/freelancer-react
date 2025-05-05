import React from 'react'
import style from './footer.module.css'

export default function footer() {
  return (
    <div className={`${style.bg} p-5`}>
      <div className={`footer container d-flex justify-content-around `}>
        <div className={`footer-left col-3`}>
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <span>Clark, MO 65243</span>
        </div>
        <div className={`footer-center col-3`}>
          <h3>Around the Web</h3>
          </div>
        <div className={`footer-right col-3`}>
          <h3>About Freelancer</h3>
          <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
        </div>
      </div>
    </div>
  )
}
