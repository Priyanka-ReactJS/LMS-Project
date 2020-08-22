import React ,{ useEffect } from 'react';
import {useDispatch , useSelector } from 'react-redux'

import TableWrap from '../../../component/Table/table'
import {fetchStudent} from '../../../store/action/student'

const StudentList = ({ onClick }) => {

   const tableHeader = ['Id' , 'Student Name' , 'User Id' , 'Password' , 'Contry' , 'City' , 'Action' ]
   const listOfStudent = useSelector(state => state.studentState.student);
    const dispatch = useDispatch(); 


   useEffect(() => {
    dispatch(fetchStudent());
}, [])
    return <div>
      <TableWrap tableHeads={tableHeader} tableRows={listOfStudent} onClick = {onClick}/>
    </div>
}
export default StudentList; 