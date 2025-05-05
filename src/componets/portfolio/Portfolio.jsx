import React from 'react';
import style from './portfolio.module.css';
import img1 from '../../assets/cabin.png';
import img2 from '../../assets/cake.png';
import img3 from '../../assets/circus.png';
import img4 from '../../assets/game.png';
import img5 from '../../assets/safe.png';
import img6 from '../../assets/submarine.png';

export default function Portfolio() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="text-center py-5" id="portfolio">
      <h2 className={`${style.pftext} fw-bold`}>PORTFOLIO</h2>
      <div className="container">
        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-md-4" key={index}>
              <div className="bg-light rounded p-3 d-flex justify-content-center align-items-center" >
                <img src={img} alt={`portfolio-${index}`} className={`${style.image}`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
