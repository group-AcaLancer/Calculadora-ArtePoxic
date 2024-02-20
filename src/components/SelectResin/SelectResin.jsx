import React, { useState } from "react";
import Header from "../header/Header";
import "./SelectResin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStoreEspesores from "../../store/useStoreEspesores";

const SelectResin = () => {
  const navigate = useNavigate();

  const { setText } = useStoreEspesores();

  const [resin, setResin] = useState(null);
  const [alert, setAlert] = useState(false);

  const handleOption = () => {
    if (resin) {
      navigate("/seleccion_de_forma");
    } else {
      setAlert(true);
    }
  };

  return (
    <section className="resin">
      <Header />

      <h2 className="resin_title">Cálculo de consumo</h2>

      <div className="resin_container-img">
        <img className="resin_img" src="/img/icons/icon-1.png" alt="" />
        <h3 className="resin_container-title">Calculo consumo</h3>
      </div>

      <div className="resin_select">
        <span className="resin_select-badge">Seleciona el tipo de resina</span>
        <ul className="resin_select-option">
          <li
            onClick={() => {
              setResin("bajo espesor");
              setText("Bajos Espesores");
            }}
            tabIndex="0"
          >
            Resina de Bajos Espesores 100:50 (Cubiertas de cocina, pisos,
            charolas, etc.)
          </li>
          <li
            onClick={() => {
              setText("Altos Espesores");
              setResin("alto espesor");
            }}
            tabIndex="0"
          >
            Resina de Altos Espesores 100:42 (Mesas de río, tablas de picar,
            encapsulados, etc.)
          </li>
        </ul>
        {alert && (
          <div className="resin_select-alert">
            <p>Selecciona el tipo de resina</p>
          </div>
        )}
      </div>
      <div className="resin_content-btn">
        <Link to={"/"} className="bx bxs-left-arrow bx-md resin__arrow"></Link>
        <button
          onClick={() => {
            handleOption();
          }}
          className="resin_form-button"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default SelectResin;
