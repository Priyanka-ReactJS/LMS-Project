import React, { useState, useEffect } from 'react'
import { PrimaryButton } from '../../../component'
import Modalwrap from '../../../component/Modal/modal'
import Createstudent from '../Student/createStudent';
import StudentList from '../../Admin/Student/studentlist';
import {Input} from '../../../component'


const Student = () => {
  const [isCreate , setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [contry, setContry] = useState({})
  const [listOfStudent, setlistOfStudent] = useState([{
    id:1,
    studentName: 'Priyanka',
    userId: 123,
    password: 456,
    contry: 'Canada',
    city: 'Scarborogh',
  },
  {
  id:2,
  studentName: 'Richa',
  userId: 1234,
  password: 4567,
  contry: 'Canada',
  city: 'Bramton',
}
   ])
  const [originallistOfStudent, setOriginallistOfStudent] = useState([{
    id:1,
    studentName: 'Priyanka',
    userId: 123,
    password: 456,
    contry: 'Canada',
    city: 'Scarborogh',
  },
  {
    id:2,
    studentName: 'Richa',
    userId: 1234,
    password: 4567,
    contry: 'Canada',
    city: 'Bramton',
  }
])


  useEffect(() => {

    console.log("newStudent...", contry)
  }, [contry])

  const submit = () => {
    const contryArray = [...listOfStudent];
    contryArray.push(contry)
    setlistOfStudent(contryArray)
    console.log(contry)
  }
  const editSubmitCourse = () =>{
  const contryArray = listOfStudent.map(city => {
    return city.id === contry.id ? contry : city;
  })
  setlistOfStudent(contryArray)
 
  }

  const editStudent = (contry) => {
    setLgShow(true)
    setContry(contry);
    
    setIsCreate(false)
     
  }
  const filterStudent = (event) => {
    const filteredStudentArray = originallistOfStudent.filter(contry => contry.studentName.toLowerCase() === event.target.value.toLowerCase());
    setlistOfStudent(filteredStudentArray)
  }
 const editCreateCourse =()=>{
  setLgShow(!lgShow)
  setContry({})
 }

  return (
    <div>

      student <br></br>
      <PrimaryButton text="Student Registration" onClick={editCreateCourse} />
      <div style={{width:"600px"}}>
        
        <Input name="filter" text="filter by name" onChange={filterStudent}/>
      </div>
      <StudentList listOfStudent={listOfStudent} onClick={(contry) => editStudent(contry)} />
      <Modalwrap isCreate={isCreate} editSubmitCourse={editSubmitCourse} title="Student Registration" submit={submit} lgShow={lgShow} setLgShow={setLgShow}>
        <Createstudent contry={contry} setContry={setContry} />
      </Modalwrap>
    </div>


  )
}
export default Student;