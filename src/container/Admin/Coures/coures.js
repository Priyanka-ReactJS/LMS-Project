import React ,{ useState , useEffect } from 'react'
import { PrimaryButton , Modalwrap } from '../../../component';
import Create from  '../Coures/create'
import CourseList from '../Coures/coureslist'

 
const Course = () =>{
  const [isCreate , setIsCreate] = useState(true)
    const [lgShow, setLgShow] = useState(false);
    const [newCourse, setNewCourse] = useState({});
    const[listOfCourse, setListOfCourse] = useState([{
      id:1,
      courseName : 'First Course',
      category:1,
      subCategory:2,
      fees:1000,
  },
{
      id:2,
      courseName : 'Second Course',
      category:2,
      subCategory:1,
      fees:2000,
}])

    useEffect(() => {
        console.log("newCourse...", newCourse);
      }, [newCourse])
    
      const submit = () => {
        const newCourseArray = [...listOfCourse];
        newCourseArray.push(newCourse)
        setListOfCourse(newCourseArray)
        console.log("jkbnkj",newCourse);
      }
    const editSubmitCourse = () =>{
      const newCourseArray = listOfCourse.map(course => {
        return course.id ===  newCourse.id ? newCourse :course;
      })
      setListOfCourse(newCourseArray)
      console.log("editedcourse",newCourseArray)
    }
    const editCourse = (course) => {
      setLgShow(true)
      setNewCourse(course)
      console.log('edit',course)
      setIsCreate(false)
    }
    const editCreateCourse = () =>{
      setLgShow(!lgShow)
      setNewCourse({})
    }
    return(
        <div>
            
        Course <br></br>
        <PrimaryButton text="Create New Courses" onClick={editCreateCourse}/>
        <CourseList listOfCourse={listOfCourse} onClick={(course) => editCourse(course)}/>
       <Modalwrap isCreate={isCreate} editSubmitCourse={editSubmitCourse } title = "Craete New Courses"  submit={submit} lgShow={lgShow} setLgShow={setLgShow}>
       <Create newCourse={newCourse} setNewCourse={setNewCourse}/>
      </Modalwrap>
        </div>
        
        
    )
}
export default Course;