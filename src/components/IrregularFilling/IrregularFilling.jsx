import { Link } from "react-router-dom";
import "./IrregularFilling.css";

//Se debe optomizar un poquito los tamaños ya que quedo bajando mucho con el scroll.

const IrregularFilling = () => {
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
        <p className="irregular-filling__paragraph">
          Calculo de Rendimiento <br />
          En caso de una pieza irregular para calcular la cantidad de producto,
          es necesario dividir la forma en figuras regulares mas pequeñas e ir
          calculando sus medidas.
          <br />
          <br />
          En caso de que eso no sea posible, dada la irregularidad, recomendamos
          que proceda de la siguiente manera: <br />
          <br />
          Prepare una cantidad de resina que considere insuficiente:
          <br />
          Aplique la mezcla directamente en el molde, según el nivel alcanzado
          puede calcular cuanto le puede hacer falta.
          <br />
          <br />
          No hay una técnica precisa para calcular formas irregulares.
          <br />
          <br />
          Ingrese los datos estimados de la figura.
        </p>
      </div>

      <form className="irregular-filling__form">
        <div className="irregular-filling__form-content">
          <div className="irregular-filling__form-content-input">
            {/* <label className="irregular-filling__form-label" htmlFor="area">
              Área (cm)
            </label> */}
            <input
              className="irregular-filling__form-imput"
              type="number"
              name="area"
              required="true"
              placeholder="Área (cm²)"
            />
          </div>

          <div className="irregular-filling__form-content-input">
            {/* <label className="irregular-filling__form-label" htmlFor="masa">
              Espesor (cm)
            </label> */}

            <input
              className="irregular-filling__form-imput"
              type="number"
              name="masa"
              required="true"
              placeholder="Espesor (mm)"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <button className="irregular-filling__form-button">Calcular</button>
          <Link to={"/"} className="bx bxs-home bx-md irregular__home"></Link>
        </div>
      </form>

      <div className="irregular-filling__result">
        <h3 className="irregular-filling__result-title">Resultado (gr)</h3>
        <div className="irregular-filling__result-gr">Catalizador (gr.)</div>
        <div className="irregular-filling__result-gr">Resina (gr.)</div>
      </div>
    </section>
  );
};

export default IrregularFilling;