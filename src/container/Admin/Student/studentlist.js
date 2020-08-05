import React ,{ useState } from 'react';
import TableWrap from '../../../component/Table/table'

const StudentList = ({listOfStudent , onClick}) => {
  //const [student, setStudent] = useState([
  //   {
  //     studentName: 'Piya',
  //     userId: 123,
  //     password: 456,
  //     contry: 'Canada',
  //     city: 'Scarborogh',   
  //   }
  // ])
 
   const tableHeader = ['Id' , 'Student Name' , 'User Id' , 'Password' , 'Contry' , 'City' , 'Action' ]

    return <div>
      <TableWrap tableHeads={tableHeader} tableRows={listOfStudent} onClick = {onClick}/>
    </div>
}
export default StudentList; 