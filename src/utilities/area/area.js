export function getAreaCircle(diameter) {
  const radio = diameter / 200;

  const area = Math.PI * Math.pow(radio, 2);

  return area.toFixed(2);
}

export function getAreaRectangle(base, height) {
  const area = (base / 100) * (height / 100);

  return area.toFixed(2);
}
