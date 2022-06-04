import "./App.css";
import StudentClass from "./02-Props-Component/StudentClass";
var students = [
  { id: 1, name: "Islom", status: "Student" },
  { id: 2, name: "Javohir", status: "Student" },
  { id: 3, name: "Hoshim", status: "Student" },
  { id: 4, name: "Sanjar", status: "Student" },
  { id: 5, name: "MuhammadAli", status: "Student" },
  { id: 6, name: "Asadbek", status: "Student" },
  { id: 7, name: "Abdulloh", status: "Student" },
];

function App() {
  return (
    <div className="App">
      <StudentClass data={students} />

      {/* {students.map((student, index) => {
        return (
          <StudentClass
            name={student.name}
            id={student.id}
            status={student.status}
          />
        );
      })} */}
    </div>
  );
}

export default App;
