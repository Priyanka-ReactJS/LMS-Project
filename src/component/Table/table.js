import React from 'react';
import { Table } from '../Bootstrapwrap/bootstrapwrap'
import {PrimaryButton} from '../index'

const TableWrap = ({ tableHeads , tableRows , onClick}) => {
    return <Table striped bordered hover>
    <thead>
      <tr>
          {
              (tableHeads || []).map(tableHead => {
              return <th>{tableHead}</th>
              })
          }
      </tr>
    </thead>
    <tbody>
        {
            (tableRows || []).map(tableRow =>{
                return <tr>
                <td>{tableRow.id}</td>
                <td>{tableRow.studentName}</td>
                <td>{tableRow.userId}</td>
                <td>{tableRow.password}</td>
                <td>{tableRow.contry}</td>
                <td>{tableRow.city}</td>
                <td><PrimaryButton id={tableRow.id} text = "Edit" onClick ={() => onClick(tableRow)}/></td>
            
              </tr>
            })
        }
    </tbody>
  </Table>
}
export default TableWrap;