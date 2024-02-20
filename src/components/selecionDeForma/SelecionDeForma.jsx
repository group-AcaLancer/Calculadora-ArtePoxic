import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import "./selecionDeForma.css";

const SelecionDeForma = () => {
  const navigate = useNavigate();

  return (
    <section className="selecciondeforma">
      <Header />
      <div className="selecciondeforma__content">
        <h2 className="selecciondeforma__title">
          Selecciona la forma a rellenar
        </h2>

        <div className="selecciondeforma__content-btn">
          <div>
            <button
              onClick={() => navigate("/calculo_rectangular")}
              className="selecciondeforma__btn1"
            >
              <img src="/img/icons/icon-2.png" alt="" />
              Rectangular
            </button>

            <button
              onClick={() => navigate("/calculo_circular")}
              className="selecciondeforma__btn2"
            >
              <img src="/img/icons/icon-3.png" alt="" />
              Circular
            </button>
          </div>
          <button
            onClick={() => navigate("/calculo_irregular")}
            className="selecciondeforma__btn3"
          >
            <img src="/img/icons/icon-4.png" alt="" />
            Relleno irregular
          </button>
        </div>
      </div>
      <div className="selecciondeforma_content-btn">
        <Link
          to={"/seleccion_resina"}
          className="bx bxs-left-arrow bx-md selecciondeforma__arrow"
        ></Link>

        {/* <button
          onClick={() => handleNavigate()}
          className="selecciondeforma_form-button"
        >
          Siguiente
        </button> */}
      </div>
    </section>
  );
};

export default SelecionDeForma;
