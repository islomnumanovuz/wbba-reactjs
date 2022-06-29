const students = [
  { id: 1, status: "BS", name: "Islom Numanov" },
  { id: 2, status: "BS", name: "Ergashev Durbek" },
  { id: 3, status: "CS", name: "Shamirboyev Muhammadbobur" },
  { id: 4, status: "IT", name: "Butaev Khusan" },
  { id: 5, status: "BS", name: "Ahmadaliyeva Dilorom" },
  { id: 6, status: "BS", name: "Mahsudov Ilhom" },
  { id: 7, status: "CS", name: "Shermatova Dilbar" },
  { id: 8, status: "BS", name: "Musurmonkulov Oybek" },
  { id: 9, status: "IT", name: "Mahmudov Asadbek" },
];
function getUpdate(arr) {
  arr.map((value) => {
    return (value.descripttion = `Name of student ${value.name} id: ${value.id} and status ${value.status}`);
  });
  return arr;
}
console.log(students);
console.log(getUpdate(students));
