import React, { useState ,useEffect } from 'react'
import { Input, Dropdownwrap } from '../../../component'

const Createstudent = ({setContry , contry}) => {
    console.log("Edited student",contry)
    const [contryId, setContryId] = useState(contry.contry || 0);
    const [city, setCity] = useState(contry || {});

    const selectContry = [
        { id: 1, name: 'India' },
        { id: 2, name: 'Canada' },
        { id: 3, name: 'US' },

    ]
    const Selectcity = [
        { id: 1, contryId: 1, name: 'Surat' },
        { id: 2, contryId: 2, name: 'Scarborogh' },
        { id: 3, contryId: 1, name: 'Vadodra' },
        { id: 4, contryId: 3, name: 'LosAngeles' },
        { id: 5, contryId: 2, name: 'Bramton' },
        { id: 6, contryId: 1, name: 'Ahemdabad' },
    ]
    const setSelectValue = (value) => {
        setContryId(value)
    }
    useEffect(() => {
        setContry(city);
       console.log(city)
    },[city])

    const setCityObject = (key,value) => {
        setCity({ ...city, [key]: value });
        console.log(key)
        console.log(value)
    }
    const filterCity = () => {
        return Selectcity.filter(city => city.contryId === contryId)
    }
        return <div className="createCourse">
        <Input name="studentName" value={contry.studentName}text="Student Name" autoFocuse={true} onChange={(e) => setCityObject(e.target.name, e.target.value)} />
        <Input name="userId" value={contry.userId}text="User Id"  onChange={(e) => setCityObject(e.target.name, e.target.value)} />
        <Input name="password" value={contry.password}text="Password"  onChange={(e) => setCityObject(e.target.name, e.target.value)} />
        <Dropdownwrap name = "contry" value={contry.contry} title="Contry" options={selectContry} setSelectValue={setSelectValue} onChange={(key, value) => setCityObject(key, value)} />
        <Dropdownwrap name = "city" value={contry.city}title="City" options = {filterCity()} onChange={(key, value) => setCityObject(key, value) }/>
        

    </div>
}
export default Createstudent;