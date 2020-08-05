import React, { useState } from 'react'
import Navbarwrap from '../../component/Navbar/navbar'
import Deshbord from './dashbord'
import Course from './Coures/coures'
import Student from '../Admin/Student/student'

const Admin = ({ setIsAuthenticated }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const getPage = () => {
        switch(currentPage) {
         case 1:
            return<Deshbord/>;
         case 2:
            return <Course />
        case 3:
            return<Student/>
        default:
            return<Deshbord/>
     }
 }
return <>
    <Navbarwrap setIsAuthenticated={setIsAuthenticated} setCurrentPage={setCurrentPage} />
    {
        getPage()

    }
</>
}
export default Admin;