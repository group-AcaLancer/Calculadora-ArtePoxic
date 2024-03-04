export function resinHighThickness(area, thickness) {
  const totalProduct = area * thickness;

  const totalProductGrams = totalProduct * 1000;

  const intermediateResult = totalProductGrams / 142;

  const catalyst = intermediateResult * 42;

  const resin = intermediateResult * 100;

  return {
    catalyst: catalyst.toFixed(2),
    resin: resin.toFixed(2),
  };
}

export function resinLowThickness(area, thickness) {
  const totalProduct = area * thickness;

  const totalProductGrams = totalProduct * 1000;

  const catalyst = totalProductGrams / 3;

  const resin = catalyst * 2;

  return {
    catalyst: catalyst.toFixed(2),
    resin: resin.toFixed(2),
  };
}
