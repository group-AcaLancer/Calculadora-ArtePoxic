import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IrregularFilling.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";
import { useForm } from "react-hook-form";

//Se debe optomizar un poquito los tamaños ya que quedo bajando mucho con el scroll.

const IrregularFilling = () => {
  const [mostrarCompleto, setMostrarCompleto] = useState(true);

  const {register, reset, handleSubmit, formState: {errors}} = useForm()

  const submit = (data) => { 
    console.log(data)

    reset({
      area: '',
      espesor: ''
    })
  }

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
        <p className={`irregular-filling__paragraph ${mostrarCompleto ? "onparagraph" : ""}`}>
              Calculo de Rendimiento <br />
              En caso de una pieza irregular para calcular la cantidad de
              producto, es necesario dividir la forma en figuras regulares mas
              pequeñas e ir calculando sus medidas.
              <br />
              <br />
              En caso de que eso no sea posible, dada la irregularidad,
              recomendamos que proceda de la siguiente manera: <br />
              <br />
              Prepare una cantidad de resina que considere insuficiente:
              <br />
              Aplique la mezcla directamente en el molde, según el nivel
              alcanzado puede calcular cuanto le puede hacer falta.
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
          {
            mostrarCompleto 
            ? <div className="container-chevron">Mostrar Más <span className="chevron"><i className='bx bx-chevron-down'></i></span></div> 
            : <div className="container-chevron">Mostrar Menos <span className="chevron"><i className='bx bx-chevron-up'></i></span></div>
          }
        </button>
      </div>

      <form onSubmit={handleSubmit(submit)} className="irregular-filling__form">
        <div className="irregular-filling__form-content">
          <div className="irregular-filling__form-content-input">
            {/* <label className="irregular-filling__form-label" htmlFor="area">
              Área (cm)
            </label> */}
            <input
              className="irregular-filling__form-imput"
              type="number"
              name="area"
              step="any"
              placeholder="Área (cm²)"
              {...register('area', {required:true})}
            />
            {errors.area && <span className='irregular-filling__form-message-err'>* Area es requireda</span>}
          </div>

          <div className="irregular-filling__form-content-input">
            {/* <label className="irregular-filling__form-label" htmlFor="masa">
              Espesor (cm)
            </label> */}

            <input
              className="irregular-filling__form-imput"
              type="number"
              name="espesor"
              step="any"
              placeholder="Espesor (mm)"
              {...register('espesor', {required:true})}
            />
            {errors.espesor && <span className='irregular-filling__form-message-err'>* Espesor es requiredo*</span>}
          </div>
        </div>
        <div
          className="irregular-filling__form-button-content"
        >
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="irregular-filling__form-button">Calcular</button>
        </div>
      </form>

      <CalculatorResult />
    </section>
  );
};

export default IrregularFilling;
