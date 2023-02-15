import style from './Portfolio.module.css';

import { portfolio } from '../data/portfolio';

export const Portfolio = () => {
  return (
    <section id="portfolio" className={style.Portfolio}>
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <div className={style['Portfolio-gallery']}>
          {portfolio.map(({ id, img, title }) => (
            <div key={id} className={style['Portfolio-image']}>
              <img src={img} alt="" />
              <div className={style['hover-gallery']}>
                <img src={'icons/icon.png'} alt="" />
                <p>{title}</p>
              </div>
            </div>
          ))}
          {/* <div className={style['Portfolio-image']}>
            <img src="img/img1.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img2.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img3.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img4.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img5.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img6.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img7.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div>
          <div className={style['Portfolio-image']}>
            <img src="img/img8.jpg" alt="" />
            <div className={style['hover-gallery']}>
              <img src="icons/icon.png" alt="" />
              <p>See our work</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
