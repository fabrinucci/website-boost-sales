import style from './Customers.module.css';

export const Customers = () => {
  return (
    <section id="customers" className="container">
      <h2 className="title">What do our customers say?</h2>
      <div className={style['Customers-cards']}>
        <div className={style['Customers-card']}>
          <img src="img/face1.jpg" alt="" />
          <div className={style['Customers-contents-card']}>
            <h4>William Johnson</h4>
            <p>
              Amet consectetur adipisicing elit. Dolorem aspernatur nostrum illo
              quam nisi maxime architecto, rerum hic eius quasi facilis.
            </p>
          </div>
        </div>
        <div className={style['Customers-card']}>
          <img src="img/face2.jpg" alt="" />
          <div className={style['Customers-contents-card']}>
            <h4>Nicole Wartz</h4>
            <p>
              Peaque repellendus necessitatibus nihil tenetur quis provident
              quaerat fugit deleniti officiis Mbappe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
