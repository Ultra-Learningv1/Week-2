import "./Home.css";
import logo from './assets/logo-menu.png';

function home() {
  return (
    <div>
      <head>
        <title>PadariaDosSonhos</title>
      </head>
      <nav>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="menu">
          <a href="#">Início</a>
          <a href="#">Cardápio</a>
          <a href="#">Sobre</a>
          <a href="#">Mais</a>
        </div>
        <div className=" links-nav">
        <a href="https://imagecolorpicker.com/">
          <img src={logo} alt="" />
          </a>
        </div>
      </nav>
      <section>
        <div className="wallpaper">
          <p className="texto-centro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="botao-centro">Conheça nossos produtos</button>
        </div>
      </section>
    </div>
  );
}

export default home;
