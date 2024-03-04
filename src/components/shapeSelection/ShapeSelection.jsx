import { useNavigate } from "react-router-dom";
import "./ShapeSelection.css";
import Header from "../../shared/header/Header";
import BtnBefore from "../../shared/btnBefore/BtnBefore";

const ShapeSelection = () => {
  const navigate = useNavigate();

  return (
    <section className="shapeSelection">
      <Header />
      <div className="shapeSelection__content">
        <h2 className="shapeSelection__title">
          Selecciona la forma a rellenar
        </h2>

        <div className="shapeSelection__content-btn">
          <div>
            <button
              onClick={() => navigate("/calculo_rectangular")}
              className="shapeSelection__btn1"
            >
              <img src="/img/icons/icon-2.png" alt="" />
              Rectangular
            </button>

            <button
              onClick={() => navigate("/calculo_circular")}
              className="shapeSelection__btn2"
            >
              <img src="/img/icons/icon-3.png" alt="" />
              Circular
            </button>
          </div>
          <button
            onClick={() => navigate("/calculo_irregular")}
            className="shapeSelection__btn3"
          >
            <img src="/img/icons/icon-4.png" alt="" />
            Relleno irregular
          </button>
        </div>
        <BtnBefore url={"/seleccion_resina"} />
      </div>
    </section>
  );
};

export default ShapeSelection;
