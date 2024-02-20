import { useEffect, useState } from "react";
import {
  superficieAltoEspesor,
  superficieBajoEspesor,
} from "../resinas/Resinas";
import useStoreEspesores from "../../store/useStoreEspesores";

// logica de renderizado resina circular

export const resResinaselecionadaCircular = () => {
  const { text } = useStoreEspesores();

  const [data, setData] = useState({});
  const [result, setResult] = useState({});
  const { diametro, espesor } = data;

  useEffect(() => {
    if (text === "Bajos Espesores") {
      setResult(calculoSuperficieCircular(diametro, espesor));
    } else if (text === "Altos Espesores") {
      setResult(calculoSuperficieCircularAE(diametro, espesor));
    }
  }, [data, setData]);

  const { calculoSuperficieCircular } = superficieBajoEspesor();
  const { calculoSuperficieCircularAE } = superficieAltoEspesor();

  return {
    result,
    setData,
  };
};

//logica renderizado resina rectangular

export const resResinaselecionadaRectangular = () => {
  const { text } = useStoreEspesores();

  const [data, setData] = useState({});
  const [result, setResult] = useState({});
  const { base, altura, espesor } = data;

  useEffect(() => {
    if (text === "Bajos Espesores") {
      setResult(calculoSuperficieRectangular(base, altura, espesor));
    } else if (text === "Altos Espesores") {
      setResult(calculoSuperficieRectangularAE(base, altura, espesor));
    }
  }, [data, setData]);

  const { calculoSuperficieRectangular } = superficieBajoEspesor();
  const { calculoSuperficieRectangularAE } = superficieAltoEspesor();

  return {
    result,
    setData,
  };
};

//logica renderizado resina relleno

export const resResinaselecionadaRelleno = () => {
  const { text } = useStoreEspesores();
  const [data, setData] = useState({});
  const [result, setResult] = useState({});
  const { diametro, espesor } = data;
  useEffect(() => {
    if (text === "Bajos Espesores") {
      setResult(calcuSuperficieRelleno(diametro, espesor));
    } else if (text === "Altos Espesores") {
      setResult(calcuSuperficieRellenoAE(diametro, espesor));
    }
  }, [data, setData]);
  const { calcuSuperficieRelleno } = superficieBajoEspesor();
  const { calcuSuperficieRellenoAE } = superficieAltoEspesor();
  return {
    result,
    setData,
  };
};
