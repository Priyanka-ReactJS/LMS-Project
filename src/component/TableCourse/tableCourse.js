import React from 'react';
import { Table } from '../Bootstrapwrap/bootstrapwrap'
import { PrimaryButton } from '../index'
const TableCourse = ({ tableHades, tableRows, onClick }) => {
  return <Table striped bordered hover>
    <thead>
      <tr>
        {
          (tableHades || []).map(tableHade => {
            return <td>{tableHade}</td>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        (tableRows || []).map(tableRow => {
          return <tr>
            <td>{tableRow.id}</td>
            <td>{tableRow.courseName}</td>
            <td>{tableRow.category}</td>
            <td>{tableRow.subCategory}</td>
            <td>{tableRow.fees}</td>
            <td><PrimaryButton id={tableRow.id} text="Edit" onClick={() => onClick(tableRow)} /></td>
          </tr>
        })
      }
    </tbody>
  </Table>
}
export default TableCourse;