import style from './Services.module.css';

export const Services = () => {
  return (
    <section id="services" className={style['Services-about']}>
      <div className="container">
        <h2 className="title">Our services</h2>
        <div className={style['Services-container']}>
          <div className={style['Services-ind']}>
            <img src="img/illustration1.svg" alt="" />
            <h3>Traveler attention</h3>
            <p>
              Quisque metus metus, eleifend id sagittis a, maximus id est tellus
              nisl, molestie eget arcu sed.
            </p>
          </div>
          <div className={style['Services-ind']}>
            <img src="img/illustration4.svg" alt="" />
            <h3>The best hosting</h3>
            <p>
              In et lectus vestibulum, porta ligula in, euismod mauris. Donec
              maximus efficitur erat ullam condimentum odio.
            </p>
          </div>
          <div className={style['Services-ind']}>
            <img src="img/illustration3.svg" alt="" />
            <h3>Our expedition to the moon</h3>
            <p>
              Plin prost usrl consectetur adipisicing elit. Labore, qui? Mind
              your port ischimal true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
