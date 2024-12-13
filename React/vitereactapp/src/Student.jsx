import React from 'react'
import './student.css'

function Student({data}) {
  let arr = []

  return (
     <div className='icard'>
    {
    
      <table border="2" >
     <tbody>
         <tr> <th><img src={data.img} height={30} width={60}/></th> <th colSpan="2">{data.college}</th> </tr>
         <tr> <th>Roll Number</th> <th>Name</th>  <th>Branch</th> </tr>
         <tr> <td >{data.roll}</td> <td>{data.name}</td> <td>{data.branch}</td> </tr>
         <tr> <td >{data.roll}</td> <td>{data.name}</td> <td>{data.branch}</td> </tr>
         <tr> <td >{data.roll}</td> <td>{data.name}</td> <td>{data.branch}</td> </tr>
     </tbody>
    </table> 

    //JSON.stringify(data)
}
    </div>

    
      
   
  )
}
// Student.defaultdata ={
//   college:"Prinston"
// }
export default Student
