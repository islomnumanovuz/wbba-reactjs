import React from "react";
import {students} from "./mock";

export class State2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      students,
    }
  }
  render(){
    const onChangeID = ({target: {value}}) => {
      if(value.length){
        let result = students.filter(item => {
          return item.id === Number(value)
        }) 
          this.setState({students: result})
      } else{
        this.setState({students})
      }
    }
    const onDelete = (value) => {
      let result = this.state.students.filter(({id}) => id !== value)
      this.setState({students: result})
    }
    return(
      <div style={{textAlign: "center", marginTop: "50px",}}>
        <input onChange={onChangeID} type="number" placeholder="Id" />
        <input type="name" placeholder="Name" />
        <input type="status" placeholder="Status" />
        <select name="" id="">
          <option value="BS">BS</option>
          <option value="IT">IT</option>
          <option value="CS">CS</option>
        </select>
        <br />
        <table border="1"  style={{width: "45%", margin: "0 auto", }}>
          <thead >
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>Status</th>
                      <th>CRUD</th>
                    </tr>
          </thead>
        {
          this.state.students.map((value) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.status}</td>
                    <td>
                      <button onClick={() => onDelete(value.id)}>delete</button>
                      <button>edit</button>
                    </td>
                  </tr>
                </tbody>
              </>
            )
          })
        }
        </table>
      </div>
    )
  }
}
// Crud = create read update delete
// read = filter, sort