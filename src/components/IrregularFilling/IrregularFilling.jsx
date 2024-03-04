import React, { useEffect, useState } from "react";
import "./IrregularFilling.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";
import { useForm } from "react-hook-form";
import useSelectedType from "../../stores/selectedType.store";
import {
  resinHighThickness,
  resinLowThickness,
} from "../../utilities/resin/resin";
import { getAreaMts2 } from "../../utilities/area/area";

const IrregularFilling = () => {
  const [mostrarCompleto, setMostrarCompleto] = useState(true);
  const [getResult, setGetResult] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const option = useSelectedType((state) => state.selectedType);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResult = (data) => {
    const { area, thickness } = data;
    const element = document.getElementById("calculatorResult");
    const getArea = getAreaMts2(area);

    if (option === "high") {
      const getResin = resinHighThickness(getArea, thickness);
      setGetResult(getResin);
      reset();
    } else {
      const getResin = resinLowThickness(getArea, thickness);
      setGetResult(getResin);
      reset();
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  useEffect(() => {
    const err = Object.keys(formErrors).length === 0;
    if (!err) {
      setGetResult({});
    }
  }, [Object.keys(formErrors).length === 0]);

  const toggleMostrarCompleto = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  return (
    <section className="irregular-filling">
      <div className="irregular-filling__content">
        <div className="irregular-filling__header">
          <img
            className="irregular-filling__header-img"
            src="/img/icons/icon-4.png"
            alt=""
          />
          <h2 className="irregular-filling__header-title">Relleno Irregular</h2>
        </div>
        <p
          className={`irregular-filling__paragraph ${
            mostrarCompleto ? "onparagraph" : ""
          }`}
        >
          Calculo de Rendimiento <br />
          En caso de una pieza irregular para calcular la cantidad de producto,
          es necesario dividir la forma en figuras regulares mas pequeñas e ir
          calculando sus medidas.
          <br />
          <br />
          En caso de que eso no sea posible, dada la irregularidad, recomendamos
          que proceda de la siguiente manera: <br />
          <br />
          Prepare una cantidad de resina que considere insuficiente.
          <br />
          Aplique la mezcla directamente en el molde, según el nivel alcanzado
          puede calcular cuanto le puede hacer falta.
          <br />
          <br />
          No hay una técnica precisa para calcular formas irregulares.
          <br />
          <br />
          Ingrese los datos estimados de la figura.
          <br />
          <br />
        </p>
        <button
          className="irregularFilling__btn-more"
          onClick={toggleMostrarCompleto}
        >
          {mostrarCompleto ? (
            <div className="container-chevron">
              Mostrar Más{" "}
              <span className="chevron">
                <i className="bx bx-chevron-down"></i>
              </span>
            </div>
          ) : (
            <div className="container-chevron">
              Mostrar Menos{" "}
              <span className="chevron">
                <i className="bx bx-chevron-up"></i>
              </span>
            </div>
          )}
        </button>
      </div>

      <form
        onSubmit={handleSubmit(handleResult)}
        className="irregular-filling__form"
      >
        <div className="irregular-filling__form-content">
          <div className="irregular-filling__form-content-input">
            <input
              className="irregular-filling__form-imput"
              type="number"
              name="area"
              step="any"
              placeholder="Área (cm²)"
              {...register("area", { required: true, min: 0.01 })}
            />
            {errors.area?.type === "required" && (
              <span className="irregular-filling__form-message-err">
                * Area es requireda
              </span>
            )}
            {errors.area?.type === "min" && (
              <span className="irregular-filling__form-message-err">
                * Número no valido
              </span>
            )}
          </div>

          <div className="irregular-filling__form-content-input">
            <input
              className="irregular-filling__form-imput"
              type="number"
              name="thickness"
              step="any"
              placeholder="Espesor (mm)"
              {...register("thickness", { required: true, min: 0.01 })}
            />
            {errors.thickness?.type === "required" && (
              <span className="irregular-filling__form-message-err">
                * Espesor es requiredo*
              </span>
            )}
            {errors.thickness?.type === "min" && (
              <span className="irregular-filling__form-message-err">
                * Número no es valido*
              </span>
            )}
          </div>
        </div>
        <div className="irregular-filling__form-button-content">
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="irregular-filling__form-button">Calcular</button>
        </div>
      </form>

      <CalculatorResult
        id="calculatorResult"
        catalyst={getResult.catalyst}
        resin={getResult.resin}
      />
    </section>
  );
};

export default IrregularFilling;
