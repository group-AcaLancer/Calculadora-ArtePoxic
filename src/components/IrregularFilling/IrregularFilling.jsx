import { Link } from "react-router-dom";
import rectangular from "/img/icons/icon-3.png";
import "./IrregularFilling.css";
import { useForm } from "react-hook-form";
import { resResinaselecionadaRelleno } from "../../utilities/selecionResina/seleccionRecina";

//Se debe optomizar un poquito los tamaños ya que quedo bajando mucho con el scroll.

const IrregularFilling = () => {


  const { register, reset, formState: { errors },  handleSubmit, } = useForm();
  const {result, setData } = resResinaselecionadaRelleno()
  const submit = (data) => {
    setData(data)
    reset();
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

      <form className="circular__form" onSubmit={handleSubmit(submit)}>
        <div className="circular__row">
          <input
            type="number"
            placeholder="Diámetro (cm)"
            className="circular__input"
            {...register("diametro", { required: true })}
          />
          <small className="circular__message">
            {errors.diameter?.type === "required" && "* Diametro es requerido"}
          </small>
        </div>
        <div className="circular__row">
          <input
            step="0.1"
            type="number"
            placeholder="Espesor (mm)"
            className="circular__input"
            {...register("espesor", { required: true })}
          />
          <small className="circular__message">
            {errors.density?.type === "required" && "* Densidad es requeridad"}
          </small>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "25px",
            width: "100%",
          }}
        >
          <button className="circular__btn">Calcular</button>
          <Link to={"/"} className="bx bxs-home bx-md circular__arrow"></Link>
        </div>
      </form>

      <div className="circular__summary">
        <h3 className="circular__subtitle--summary">Resultado (gr)</h3>
        <span className="circular__output">
         {result.catalizador ?  result.catalizador : 'Catalizador' } (gr.)
        </span>
        <span className="circular__output">
        {result.resina ?  result.resina : 'Resina' } (gr.)
        </span>
      </div>
    </section>
  );
};

export default IrregularFilling;
