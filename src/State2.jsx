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
        <table border="1"  style={{textAlign:"center", width: "80%", margin: "0 auto"}}>
        {
          this.state.students.map((value) => {
            return (
              <>
                <thead >
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.status}</td>
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