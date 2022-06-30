import React, { Component } from "react";
import { students } from "../../mock/mock";

export default class StudentMock extends Component {
  constructor() {
    super();
    this.state = {
      students,
      selected: {},
    };
  }
  render() {
    /*     const onChangeId = ({ target: { value } }) => {
      let res = students.filter((student) => student.id === +value);
      this.setState({ students: res });
      !value.length && this.setState({ students: students });
    };
    const onChangeName = ({ target: { value } }) => {
      let res = students.filter((student) => student.name.includes(value));
      this.setState({ students: res });
    }; */
    const onChange = ({ target: { value, name } }) => {
      let res = students.filter((student) => {
        return `${student[name]}`.includes(value);
      });
      this.setState({ students: res });
    };
    const onDelete = (value) => {
      let res = this.state.students.filter(({ id }) => id !== value);
      this.setState({ students: res });
    };
    const onChangeStatus = ({ target }) => {
      console.log(target.value);
      let res = students.filter((student) => student.status === target.value);
      this.setState({ students: res });
    };
    const onEdit = (value) => {
      this.setState({ selected: value });
    };

    const onSave = () => {
      let res = this.state.students.map((value) =>
        this.state.selected.id === value.id ? this.state.selected : value
      );
      this.setState({ students: res, selected: {} });
    };
    const onChangeInput = ({ target: { name, value } }) => {
      this.setState({ selected: { ...this.state.selected, [name]: value } });
    };
    return (
      <div className="container">
        <div className="input-group">
          <input name="id" onChange={onChange} type="number" placeholder="id" />
          <input
            name="name"
            onChange={onChange}
            type="text"
            placeholder="name"
          />
          <select name="" id="" onChange={onChangeStatus}>
            <option value="BS">BS</option>
            <option value="IT">IT</option>
            <option value="CS">CS</option>
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
                  <td>{index + 1}</td>
                  <td>
                    {this.state.selected.id === student.id ? (
                      <input
                        onChange={onChangeInput}
                        name="name"
                        value={this.state.selected.name}
                      />
                    ) : (
                      student.name
                    )}
                  </td>
                  <td>
                    {this.state.selected.id === student.id ? (
                      <input
                        onChange={onChangeInput}
                        name="status"
                        value={this.state.selected.status}
                      />
                    ) : (
                      student.status
                    )}
                  </td>
                  <td>
                    <button onClick={() => onDelete(student.id)}>Delete</button>
                    {this.state.selected.id === student.id ? (
                      <button onClick={() => onSave(student)}>Save</button>
                    ) : (
                      <button onClick={() => onEdit(student)}>Edit</button>
                    )}
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

// Problems into subproblems
// click the edit button
// get Id
// status and name cange to editable
