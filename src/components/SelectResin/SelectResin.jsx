import { useEffect, useState } from "react";
import BtnBefore from "../../shared/btnBefore/BtnBefore";
import BtnNext from "../../shared/btnNext/BtnNext";
import Header from "../../shared/header/Header";
import useSelectedType from "../../stores/selectedType.store";
import "./SelectResin.css";
import Select from "react-select";

const SelectResin = () => {
  const setOption = useSelectedType((state) => state.setSelectedType);

  const [onAlert, setOnAlert] = useState(false)

  const handleSelectOption = ({ value }) => {
    setOption(value);
  };

  useEffect(() => {
    setOption(null);
  }, []);

  const selectOption = [
    {
      label:
        "Resina de Altos Espesores 100:42 (Mesas de río, tablas de picar, encapsulados, etc.)",
      value: "high",
    },
    {
      label:
        "Resina de Bajos Espesores 100:50 (Cubiertas de cocina, pisos, charolas, etc.)",
      value: "low",
    },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      cursor: "pointer",
      borderColor: state.isFocused ? "#e10d2b" : "#999",
      // width: "100%",
      width: "100%",
      boxShadow: state.isFocused ? "0 0 0 1px #e10d2b" : null,
      "&:hover": {
        borderColor: state.isFocused ? "#e10d2b" : "#999",
      },
    }),
    menu: (base) => ({
      ...base,
      width: "100%",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      border: "1px solid #e10d2b",
      borderRadius: "4px",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#e10d2b" : "#333",
      "&:hover": {
        color: "#e10d2b",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "rgba(225, 13, 43, 0.2)"
        : "transparent",
      color: "inherit",
      "&:hover": {
        backgroundColor: "rgba(225, 13, 43, 0.1)",
      },
    }),
  };

  return (
    <section className="resin">
      <Header />

      <article className="container">
        <h2 className="resin_title">Cálculo de consumo</h2>

        <div className="resin_container-img">
          <img className="resin_img" src="/img/icons/icon-1.png" alt="" />
          <h3 className="resin_container-title">Cálculo consumo</h3>
        </div>

        <div className={`resin_alert ${onAlert ? '' : 'resin_alert-off'}`}>
          <p className="resin_alert-error">Tiene que seleccionar una resina</p>
        </div>

        <Select
          options={selectOption}
          defaultValue={{ label: "Selecciona un tipo de resina", value: null }}
          onChange={handleSelectOption}
          styles={customStyles}
          isSearchable={false}
        />

        <div className="resin_btn">
          <BtnNext url="/seleccion_de_forma" setOnAlert={setOnAlert} />
          <BtnBefore url={"/"} />
        </div>
      </article>
    </section>
  );
};

export default SelectResin;
