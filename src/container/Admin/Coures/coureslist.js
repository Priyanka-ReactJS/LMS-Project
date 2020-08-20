import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'

import {TableCourse} from '../../../component'
import {fetchCourses} from '../../../store/action/course'

const CourseList = ({listOfCourse , onClick}) => {

    const tableHeader = ['Id' , 'Course Name' , 'Catagory' , 'Subcatagory' , 'Action' , 'Edit']
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(fetchCourses());
    }, [])
   
   return <div>
    <TableCourse tableHades = {tableHeader} tableRows ={listOfCourse} onClick={onClick}/>
    </div>
}
export default CourseList;