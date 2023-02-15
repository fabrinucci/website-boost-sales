import style from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={`container ${style.About}`}>
      <h2 className="title">Our product</h2>
      <div className={style['About-container']}>
        <img
          src="img/illustration2.svg"
          alt=""
          className={style['About-image']}
        />
        <div className={style['contents-text']}>
          <h3>
            <span>1</span>The best products
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit
            numquam sapiente quam eum, architecto animi pariatur, velit
            doloribus laboriosam ut.
          </p>
          <h3>
            <span>2</span>The best products
          </h3>
          <p>
            Leius aspernatuinima sed dicta odit orem ipsum dolor sit amet
            consectetur uam eum, architecto animi pariatur. Deserunt nima sed
            dicta odit numquam sapiente qvelit doloribus por ellim.
          </p>
        </div>
      </div>
    </section>
  );
};
