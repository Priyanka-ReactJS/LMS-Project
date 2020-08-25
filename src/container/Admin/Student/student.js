import React, { useState, useEffect } from 'react'
import { PrimaryButton } from '../../../component'
import Modalwrap from '../../../component/Modal/modal'
import Createstudent from '../Student/createStudent';
import StudentList from '../../Admin/Student/studentlist';
import {Input} from '../../../component'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { SaveStudent } from '../../../store/action/student';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'


const Student = () => {
  const [isCreate , setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [contry, setContry] = useState({})
  const [listOfStudent, setlistOfStudent] = useState([])
  
  const dispatch = useDispatch();

  const studentRedux = useSelector(state => state.courseState.course);


  const [originallistOfStudent] = useState([])


  useEffect(() => {
    setlistOfStudent(studentRedux);
  }, [studentRedux])
  //   console.log("newStudent...", contry)
  // }, [contry])

  const submit = () => {
    // const contryArray = [...listOfStudent];
    // contryArray.push(contry)
    // setlistOfStudent(contryArray)
    // console.log(contry)
    dispatch(SaveStudent(contry));
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
export default withErrorHandler(Student,axios);