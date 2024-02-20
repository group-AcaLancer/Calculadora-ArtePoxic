import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {



  return (
    <section className="home">
      <img
        className="home_logo"
        src="./img/logo/lg-home.png"
        alt="Logo ArtePoxic"
      />
      <h1 className="home_title">Calculadora de resina</h1>
      <Link to={"/seleccion_resina"} className="home_btn">Iniciar</Link>
    </section>
  );
};

export default Home;
