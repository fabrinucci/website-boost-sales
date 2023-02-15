import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id="contact" className={style.Footer}>
      <div className={style['Footer-container']}>
        <div className={style['Footer-content']}>
          <h4>Phone</h4>
          <p>+32 527 963917</p>
        </div>
        <div className={style['Footer-content']}>
          <h4>Email</h4>
          <p>email4654@gmail.com</p>
        </div>
        <div className={style['Footer-content']}>
          <h4>Location</h4>
          <p>Florida WMI - 514 ST</p>
        </div>
      </div>
      <h2 className={style['Footer-title']}>
        &copy; Our Shop Page | Florida WTI
      </h2>
    </footer>
  );
};
