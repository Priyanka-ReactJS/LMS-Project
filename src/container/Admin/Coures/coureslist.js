import React from 'react'
import {TableCourse} from '../../../component'

const CourseList = ({listOfCourse , onClick}) => {

    const tableHeader = ['Id' , 'Course Name' , 'Catagory' , 'Subcatagory' , 'Action' , 'Edit']
   
   return <div>
    <TableCourse tableHades = {tableHeader} tableRows ={listOfCourse} onClick={onClick}/>
    </div>
}
export default CourseList;