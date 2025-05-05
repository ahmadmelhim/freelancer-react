import React from 'react';
import style from './contact.module.css';

export default function Contact() {
  return (
    <div id="contact" className={`py-5 ${style.contactSection}`}>
      <div className="container">
        <h2 className="text-center text-uppercase fw-bold">Contact Me</h2>
        <form className="w-50 mx-auto mt-4">
          <div className="mb-3">
            <input type="text" className="form-control border-0 border-bottom " placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control border-0 border-bottom " placeholder="Email Address" />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control border-0 border-bottom " placeholder="Phone Number" />
          </div>
          <div className="mb-3">
            <textarea className="form-control border-0 border-bottom " rows="4" placeholder="Message"></textarea>
          </div>
          <button type="submit" className={`${style.btn}`}>Send</button>
        </form>
      </div>
    </div>
  );
}
