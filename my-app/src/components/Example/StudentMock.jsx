import React, { Component } from "react";
import { students } from "../../mock/mock";

export default class StudentMock extends Component {
  constructor() {
    super();
    this.state = {
      students,
    };
  }
  render() {
    const onChangeId = ({ target: { value } }) => {
      let res = students.filter((student) => student.id === +value);
      this.setState({ students: res });

      !value.length && this.setState({ students: students });
    };
    const onDelete = (value) => {
      let res = this.state.students.filter(({ id }) => id !== value);
      this.setState({ students: res });
    };

    return (
      <div className="container">
        <div className="input-group">
          <input onChange={onChangeId} type="number" placeholder="id" />
          <input type="text" placeholder="name" />
          <select name="" id="">
            <option value="BS">BS</option>
            <option value="IT">IT</option>
            <option value="CS">BS</option>
          </select>
        </div>
        <table border={1} width={200}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, index) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.status}</td>
                  <td>
                    <button onClick={() => onDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Crud
/* 
  Create
  Read
  Update
  Delete
*/
