import rectangular from "/img/icons/icon-2.png";
import { useForm } from "react-hook-form";
import "./RectangularCalculator.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";

const RectangularCalculator = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <section className="rectangular">
      {/* <!-- RECTANGULAR CALCULATOR FORM --> */}
      <form className="rectangular__form" onSubmit={handleSubmit(submit)}>
        <figure className="rectangular__figure">
          <img src={rectangular} className="rectangular__img" />
          <h3 className="rectangular__subtitle--form">Rectangular</h3>
        </figure>
        <h2 className="rectangular__title">Dimensiones de la forma</h2>
        <div className="rectangular__row">
          <input
            type="number"
            placeholder="Base (cm)"
            className="rectangular__input"
            {...register("base", { required: true })}
          />
          <small className="rectangular__message">
            {errors.base?.type === "required" && "* Base is required"}
          </small>
        </div>
        <div className="rectangular__row">
          <input
            type="number"
            placeholder="Altura (cm)"
            className="rectangular__input"
            {...register("height", { required: true })}
          />
          <small className="rectangular__message">
            {errors.height?.type === "required" && "* Height is required"}
          </small>
        </div>
        <div className="rectangular__row">
          <input
            type="number"
            placeholder="Espesor (mm)"
            className="rectangular__input"
            {...register("density", { required: true })}
          />
          <small className="rectangular__message">
            {errors.density?.type === "required" && "* Density is required"}
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
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="rectangular__btn">Calcular</button>
        </div>
      </form>
      {/* <!-- RECTANGULAR CALCULATOR RESULT --> */}
      <CalculatorResult />
    </section>
  );
};
export default RectangularCalculator;
