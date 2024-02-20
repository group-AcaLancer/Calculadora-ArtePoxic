export function resinLowThickness(area, thicknessMm) {
  const thickness = thicknessMm / 1000;

  const totalProduct = area * thickness;

  const totalProductGrams = totalProduct * 1000;

  const intermediateResult = totalProductGrams / 3;

  const catalyst = intermediateResult * 2;

  const resin = intermediateResult * 1;

  return {
    catalyst: catalyst.toFixed(2),
    resin: resin.toFixed(2),
  };
}
