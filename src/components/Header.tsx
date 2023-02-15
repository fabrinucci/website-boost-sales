import style from './Header.module.css';

export const Header = () => {
  return (
    <header id="home" className={style.Header}>
      <nav className={style.Nav}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <section className={style['Header-text']}>
        <h1>Boost your sales by 200%</h1>
        <h2>With our powerful website</h2>
      </section>
      <div className={style.wave}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          height="100%"
          width="100%"
        >
          <path
            d="M1.41,84.38 C149.99,150.00 349.20,-49.98 500.00,49.98 L502.54,167.28 L0.00,150.00 Z"
            stroke="none"
            fill="#ffffff"
            data-darkreader-inline-stroke=""
            data-darkreader-inline-fill=""
          ></path>
        </svg>
      </div>
    </header>
  );
};
