import React, { useState, useEffect } from 'react'
import { PrimaryButton, Modalwrap } from '../../../component';
import Create from '../Coures/create';
import CourseList from '../Coures/coureslist';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { SaveCourse } from '../../../store/action/course';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
//import withRequiredAuth from '../../../hoc/withRequiredAuth'


const Course = () => {
  const [isCreate, setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourse, setListOfCourse] = useState([])

  const dispatch = useDispatch();

  const courseRedux = useSelector(state => state.courseState.course);


  useEffect(() => {
    setListOfCourse(courseRedux);
  }, [courseRedux])

  // useEffect(() => {
  //   console.log("newCourse...", newCourse);
  // }, [newCourse])

  const submit = () => {
    // const newCourseArray = [...listOfCourse];
    // newCourseArray.push(newCourse)
    // setListOfCourse(newCourseArray)
    //dispatch({type: actionTypes.SAVE_COURSE , value : newCourse});
    //axios.post('https://recat-redux-lms.firebaseio.com/course.json', {course: newCourse});
    dispatch(SaveCourse(newCourse));
  }
  const editSubmitCourse = () => {
    const newCourseArray = listOfCourse.map(course => {
      return course.id === newCourse.id ? newCourse : course;
    })
    setListOfCourse(newCourseArray)
  }
  const editCourse = (course) => {
    setLgShow(true)
    setNewCourse(course)
    setIsCreate(false)
  }
  
  return (
    <div>

      Course <br></br>
      <PrimaryButton text="Create New Courses" onClick={() => setLgShow(!lgShow)}/>
      <div style={{ "width": "500px" }}>
     </div>
      <CourseList listOfCourse={listOfCourse} onClick={(course) => editCourse(course)}/>
      <Modalwrap isCreate={isCreate} editSubmitCourse={editSubmitCourse} title="Craete New Courses" submit={submit} lgShow={lgShow} setLgShow={setLgShow}>
      <Create newCourse={newCourse} setNewCourse={setNewCourse}/>
      </Modalwrap>
    </div>


  )
}
export default withErrorHandler(Course,axios);