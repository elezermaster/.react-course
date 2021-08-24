import React,{useState} from 'react';
import api from "../API"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Users = () => {
  const[users,setUsers]=useState(api.users.fetchAll())  
  const handleDelete =(userId)=>{
    const newUsers = users.filter(user=> user._id !== userId)
    setUsers(newUsers) 
  }
  const renderPhrase =(number)=>{
    return  number>0?(number===2||number===3||number===4)?`${number} человекa тусанет стобой сегодня`:`${number} человек тусанет стобой сегодня`:'никого нет'
  }

    // tedious: { _id: "67rdca3eeb7f6fgeed471198", name: "Нудила", color: "primary" },
    // strange: { _id: "67rdca3eeb7f6fgeed471100", name: "Странный", color: "secondary" },
    // buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
    // alcoholic: { _id: "67rdca3eeb7f6fgeed471101", name: "Алкоголик", color: "danger" },
    // handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Красавчик", color: "info" },
    // uncertain: { _id: "67rdca3eeb7f6fgeed471102", name: "Неуверенный", color: "dark" },
  const listQualities =( qualities)=>{
   const usersQualities  = Object.keys(qualities).map((q)=>{
       console.log('qualities[q]',qualities[q])//key={qualities[q]._id}
      return (<Badge bg={qualities[q].color} className="rounded-pill" color="blue" style={{marginLeft:'5px'}}>{qualities[q].name}</Badge>)//pill pill className="rounded-circle" 
   })
   console.log('usersQualities',usersQualities)
   return usersQualities
  }
    // _id: "67rdca3eeb7f6fgeed471816",
    // name: "Кокс",
    // profession: professions.doctor,
    // qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    // completedMeetings: 15,
    // rate: 2.5
  const listUsers =users && users.map((user,index)=>{
    return (
        <tr key={user._id}>
        <td>{index}</td>
        <td>{user.name}</td>
        <td>{listQualities(user.qualities)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>{<Button variant="warning" onClick={()=>handleDelete(user._id)}>Delete</Button>}</td>
        </tr>
    )
 })
    return (
        <React.Fragment>
        <h2><Badge bg={users.length>0?"primary":"danger"}>
           {renderPhrase(users.length)}
            </Badge></h2>
            <Table striped bordered hover style={{display:(users.length===0)?"none":"show"}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Qualities</th>
                    <th>Profession</th>
                    <th>Meetings</th>
                    <th>Rate</th>
                    <td>{/*delete button*/}</td>
                    </tr>
                </thead>
                <tbody>
                {listUsers}
                </tbody>
            </Table>
        </React.Fragment>
    );
};

export default Users;