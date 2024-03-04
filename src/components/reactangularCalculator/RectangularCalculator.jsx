import rectangular from "/img/icons/icon-2.png";
import { useForm } from "react-hook-form";
import "./RectangularCalculator.css";
import CalculatorResult from "../../shared/results/CalculatorResult";
import BtnBefore from "../../shared/btnBefore/BtnBefore";
import { useEffect, useState } from "react";
import { getAreaRectangle } from "../../utilities/area/area";
import {
  resinHighThickness,
  resinLowThickness,
} from "../../utilities/resin/resin.js";
import useSelectedType from "../../stores/selectedType.store.js";

const RectangularCalculator = () => {
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
    const { base, height, thickness } = data;
    const element = document.getElementById("calculatorResult");

    const getArea = getAreaRectangle(base, height);

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
    <section className="rectangular">
      {/* <!-- RECTANGULAR CALCULATOR FORM --> */}
      <form className="rectangular__form" onSubmit={handleSubmit(handleResult)}>
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
            step="any"
            {...register("base", { required: true, min: 0.01 })}
          />
          <small className="rectangular__message">
            {errors.base?.type === "required" && "* Base es requireda"}
            {errors.base?.type === "min" && "* Numero no valido"}
          </small>
        </div>
        <div className="rectangular__row">
          <input
            type="number"
            placeholder="Altura (cm)"
            className="rectangular__input"
            step="any"
            {...register("height", { required: true, min:0.01 })}
          />
          <small className="rectangular__message">
            {errors.height?.type === "required" && "* Altura es requireda"}
            {errors.height?.type === "min" && "* Numero no valido"}
          </small>
        </div>
        <div className="rectangular__row">
          <input
            type="number"
            placeholder="Espesor (mm)"
            className="rectangular__input"
            step="any"
            {...register("thickness", { required: true, min:0.01 })}
          />
          <small className="rectangular__message">
            {errors.thickness?.type === "required" && "* Espesor es requiredo"}
            {errors.thickness?.type === "min" && "* Numero no valido"}
          </small>
        </div>
        <div className="rectangular__btn-content">
          <BtnBefore url={"/seleccion_de_forma"} />
          <button className="rectangular__btn">Calcular</button>
        </div>
      </form>
      {/* <!-- RECTANGULAR CALCULATOR RESULT --> */}
      <CalculatorResult id='calculatorResult' catalyst={getResult.catalyst} resin={getResult.resin} />
    </section>
  );
};
export default RectangularCalculator;
