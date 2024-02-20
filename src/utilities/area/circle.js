export function getAreaCircle(diameter) {
  const radio = diameter / 200;

  const area = Math.PI * Math.pow(radio, 2);

  return area;
}
