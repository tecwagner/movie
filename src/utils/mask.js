export function FormataDate(value) {
  let arrayData = [];

  if (value) {
    value = value.split("T")[0];

    arrayData = value.split("-");

    value = `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
  }

  return value;
}
