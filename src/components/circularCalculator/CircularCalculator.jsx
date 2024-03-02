import circular from "/img/icons/icon-3.png";
import { useForm } from "react-hook-form";
import "./CircularCalculator.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";

const CircularCalculator = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    console.log(data);

    reset({
      diameter: "",
      density: "",
    });
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
            step="any"
            {...register("diameter", { required: true })}
          />
          <small className="circular__message">
            {errors.diameter?.type === "required" && "* Diámetro es requiredo"}
          </small>
        </div>
        <div className="circular__row">
          <input
            type="number"
            placeholder="Espesor (mm)"
            className="circular__input"
            step="any"
            {...register("density", { required: true })}
          />
          <small className="circular__message">
            {errors.density?.type === "required" && "* Espesor es requiredo"}
          </small>
        </div>
        <div
          className="circular__btn-conten"
        >
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="circular__btn">Calcular</button>
        </div>
      </form>
      {/* <!-- CIRCULAR CALCULATOR FORM --> */}
      <CalculatorResult />
    </section>
  );
};

export default CircularCalculator;
