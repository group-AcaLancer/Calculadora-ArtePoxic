import React, { useState } from "react";
import Header from "../header/Header";
import "./SelectResin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SelectResin = () => {
  const navigate = useNavigate();
  const [resin, setResin] = useState(null);
  const [alert, setAlert] = useState(false);

  const handleOption = () => {
    if (resin) {
      navigate("/seleccion_de_forma");
    } else {
      setAlert(true);
    }
  };

  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <section className="resin">
      <Header />
      <div className="container">
        <h2 className="resin_title">Cálculo de consumo</h2>

        <div className="resin_container-img">
          <img className="resin_img" src="/img/icons/icon-1.png" alt="" />
          <h3 className="resin_container-title">Calculo consumo</h3>
        </div>

        <div className="resin_options">
          <div className="resin_select">
            <button onClick={toggleOpciones} className="resin_select-badge">
              Tipo de resina <i className="bx bxs-down-arrow resin__arrow"></i>
            </button>
            {mostrarOpciones && (
              <ul className="resin_select-option">
                <li
                  onClick={() => {
                    setResin("bajo espesor");
                  }}
                  tabindex="0"
                >
                  Resina de Bajos Espesores 100:50 (Cubiertas de cocina, pisos,
                  charolas, etc.)
                </li>
                <li
                  onClick={() => {
                    setResin("alto espesor");
                  }}
                  tabindex="0"
                >
                  Resina de Altos Espesores 100:42 (Mesas de río, tablas de picar,
                  encapsulados, etc.)
                </li>
              </ul>
            )}
          </div>

          {alert && (
            <div className="resin_select-alert">
              <p>Selecciona el tipo de resina</p>
            </div>
          )}

          <div className="resin_content-btn">
            <Link to={"/"} class="bx bxs-left-arrow bx-md resin__arrow"></Link>
            <button
              onClick={() => {
                handleOption();
              }}
              className="resin_form-button"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectResin;
