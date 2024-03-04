import circular from "/img/icons/icon-3.png";
import { useForm } from "react-hook-form";
import "./CircularCalculator.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";
import { getAreaCircle } from "../../utilities/area/area";
import useSelectedType from "../../stores/selectedType.store";
import { useEffect, useState } from "react";
import {
  resinHighThickness,
  resinLowThickness,
} from "../../utilities/resin/resin";

const CircularCalculator = () => {
  const option = useSelectedType((state) => state.selectedType);
  const [getResult, setGetResult] = useState({});
  const [formErrors, setFormErrors] = useState({})

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleResult = (data) => {
    const { diameter, thickness } = data;
    const element = document.getElementById("calculatorResult");

    const getArea = getAreaCircle(diameter);

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
    setFormErrors(errors)
  }, [errors])
  
  
  useEffect(() => {
    const err = Object.keys(formErrors).length === 0
    if (!err) {
      setGetResult({})
    }
    
  }, [Object.keys(formErrors).length === 0])

  return (
    <section className="circular">
      {/* <!-- CIRCULAR CALCULATOR FORM --> */}
      <form className="circular__form" onSubmit={handleSubmit(handleResult)}>
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
            {...register("diameter", { required: true, min:0.01 })}
          />
          <small className="circular__message">
            {errors.diameter?.type === "required" && "* Diámetro es requiredo"}
            {errors.diameter?.type === "min" && "* Numero no valido"}
          </small>
        </div>
        <div className="circular__row">
          <input
            type="number"
            placeholder="Espesor (mm)"
            className="circular__input"
            step="any"
            {...register("thickness", { required: true, min:0.01 })}
          />
          <small className="circular__message">
            {errors.thickness?.type === "required" && "* Espesor es requiredo"}
            {errors.thickness?.type === "min" && "* Numero no valido"}
          </small>
        </div>
        <div className="circular__btn-conten">
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="circular__btn">Calcular</button>
        </div>
      </form>
      {/* <!-- CIRCULAR CALCULATOR FORM --> */}
      <CalculatorResult id='calculatorResult' catalyst={getResult.catalyst} resin={getResult.resin} />
    </section>
  );
};

export default CircularCalculator;
