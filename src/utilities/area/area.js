export function getAreaCircle(diameter) {
  const radio = diameter / 200;

  const area = Math.PI * Math.pow(radio, 2);

  return area;
}

export function getAreaRectangle(base, height) {
  const area = (base / 100) * (height / 100);

  return area;
}

export function getAreaMts2(areaCm2) {
  const areaM2 = areaCm2 / 10000;

  return areaM2;
}
