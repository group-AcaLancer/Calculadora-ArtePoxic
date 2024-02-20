//Resina de Bajos Espesores 100:50

//Resina de Altos Espesores 100:42

// ==>Resinas Bajos espesores<== \\

/// => Superficie Circular

// let altura = 5; //medida en cm
// let diametro = 30; //medida en cm
// let espesor = 1.5; //medida en mm
// let base = 0.5; // medida en cm

export const superficieBajoEspesor = () => {
  const calculoSuperficieCircular = (diametro, espesor) => {
    let radio = diametro / 100;
    let area = Math.PI * Math.pow(radio / 2, 2);
    let productoTotal = area * espesor;
    let productoTotalGramos = productoTotal * 1000;
    let catalizador = productoTotalGramos / 3;
    let resina = catalizador * 2;

    return { catalizador: catalizador.toFixed(1), resina: resina.toFixed(1) };
  };

  /// => Superficie rectangular

  const calculoSuperficieRectangular = (base, altura, espesor) => {
    let baseM = base / 100;
    let alturaM = altura / 100;
    let area = baseM * alturaM;
    let productoTotal = area * espesor;
    let productoTotalGramos = productoTotal * 1000;
    let catalizador = productoTotalGramos / 3;
    let resina = catalizador * 2;

    return {
      catalizador: catalizador.toFixed(2),
      resina: resina.toFixed(2),
    };
  };

  /// => Superficie Relleno irregular

  const calcuSuperficieRelleno = (diametro, espesor) => {
    let diametroM = diametro / 100;
    let area = Math.PI * Math.pow(diametroM / 2, 2);
    let productoTotal = area * espesor;
    let productoTotalGramos = productoTotal * 1000;
    let catalizador = productoTotalGramos / 3;
    let resina = catalizador * 2;

    return {
      catalizador: catalizador.toFixed(2),
      resina: resina.toFixed(2),
    };
  };

  return {
    calculoSuperficieCircular,
    calculoSuperficieRectangular,
    calcuSuperficieRelleno,
  };
};
// ==>Resinas Altos espesores<== \\


export const superficieAltoEspesor = () => {

 const calculoSuperficieCircularAE = (diametro, espesor) => {
  let radio = diametro / 100;
  let area = Math.PI * Math.pow(radio / 2, 2);
  let productoTotal = area * espesor;
  let productoTotalGramos = productoTotal * 1000;
  let resultado = productoTotalGramos / 142;
  let catalizador = resultado * 42;
  let resina = resultado * 100;

  return { catalizador: catalizador.toFixed(1), resina: resina.toFixed(1) };
};

const calculoSuperficieRectangularAE = (base, altura, espesor) => {
  let baseM = base / 100;
  let alturaM = altura / 100;
  let area = baseM * alturaM;
  let productoTotal = area * espesor;
  let productoTotalGramos = productoTotal * 1000;
  let resultado = productoTotalGramos / 142;
  let catalizador = resultado * 42;
  let resina = resultado * 100;
  return {
    catalizador: catalizador.toFixed(1),
    resina: resina.toFixed(1),
  };
};

 const calcuSuperficieRellenoAE = (diametro, espesor) => {
  let diametroM = diametro / 100;
  let area = Math.PI * Math.pow(diametroM / 2, 2);
  let productoTotal = area * espesor;
  let productoTotalGramos = productoTotal * 1000;
  let resultado = productoTotalGramos / 142;
  let catalizador = resultado * 42;
  let resina = resultado * 100;

  return {
    catalizador: catalizador.toFixed(1),
    resina: resina.toFixed(1),
  };
};


return{
    calculoSuperficieCircularAE,
    calculoSuperficieRectangularAE,
    calcuSuperficieRellenoAE,
}
}