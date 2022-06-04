import React from "react";

class StudentClass extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Name: {this.props.name}</h1>
        <h1>Id: {this.props.id}</h1>
        <h1>Status: {this.props.status}</h1> */}
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((student, index) => {
              return (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default StudentClass;
