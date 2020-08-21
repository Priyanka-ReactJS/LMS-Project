import React, { useEffect } from 'react'
import {useDispatch , useSelector } from 'react-redux'

import {TableCourse} from '../../../component'
import {fetchCourses} from '../../../store/action/course'

const CourseList = ({ onClick }) => {

    const tableHeader = ['Id' , 'Course Name' , 'Catagory' , 'Subcatagory' , 'Action' , 'Edit']
    const listOfCourse = useSelector(state => state.courseState.course);
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(fetchCourses());
    }, [])
   
   return <div>
    <TableCourse tableHades = {tableHeader} tableRows ={listOfCourse} onClick={onClick}/>
    </div>
}
export default CourseList;