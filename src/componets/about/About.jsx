import React from 'react';
import style from './about.module.css';

export default function About() {
  return (
    <section className={`text-white text-center  ${style.aboutSection}`}>
      <div className="container py-5">
        <h2 className="fw-bold text-uppercase">About</h2>

        <div className="row justify-content-center mt-4">
          <div className="col-md-5">
            <p className="">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete
              source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-md-5">
            <p className="">
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your
              email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>
        <button className={`${style.FreeDownload} mt-4`}>Free Download!</button>

      </div>
    </section>
  );
}
