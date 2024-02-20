import circular from "/img/icons/icon-3.png";
import { useForm } from "react-hook-form";
import "./CircularCalculator.css";
import { Link } from "react-router-dom";
import { resResinaselecionadaCircular } from "../../utilities/selecionResina/seleccionRecina";

const CircularCalculator = () => {

  const { register, reset, formState: { errors },  handleSubmit, } = useForm();
  const {result, setData } = resResinaselecionadaCircular()
  const submit = (data) => {
    setData(data)
    reset();
  };

  return (
    <section className="circular">
      {/* <!-- CIRCULAR CALCULATOR FORM --> */}
      <form className="circular__form" onSubmit={handleSubmit(submit)}>
        <figure className="circular__figure">
          <img src={circular} className="circular__img" />
          <h3 className="circular__subtitle--form">Circular</h3>
        </figure>
        <h2 className="circular__title">Dimensiones de la forma</h2>
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
      {/* <!-- CIRCULAR CALCULATOR FORM --> */}
      <div className="circular__summary">
        <h3 className="circular__subtitle--summary">Resultado (gr)</h3>
        <span className="circular__output">
         {result?.catalizador ?  result.catalizador : 'Catalizador' } (gr.)
        </span>
        <span className="circular__output">
        {result?.resina ?  result.resina : 'Resina' } (gr.)
        </span>
      </div>
    </section>
  );
};

export default CircularCalculator;
