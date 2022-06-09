## CRUD - CREATE, READ, UPDATE, DELETE

### add - addStudent()

### read

- getSortByID()
- getSortByName()
- getSortByStatus()

### update - getUpdate()

### delete - getDelete()

```
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
```

### add

```
const createObj = (id, status, name) => ({ id, status, name });
function addStudent(obj) {
  students.push(obj);
  return students;
}
console.log(addStudent(createObj(10, "IT", "Nozima")));
```

### read

- getSortByID()
- getSortByName()
- getSortByStatus()

```

function getSortByID(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a.id - b.id;
  });
  return sortedArr;
}
console.log(getSortByID(students));
```

```
function getSortByName(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  return sortedArr;
}
console.log(getSortByName(students));
```

### update

```

```
