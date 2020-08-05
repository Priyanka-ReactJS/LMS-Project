import React from 'react'
import { Modal } from '../../component/Bootstrapwrap/bootstrapwrap'
import SecondButton from '../Button/secondButton'

import PrimaryButton from '../Button/button'
const Modalwrap = ({title,lgShow, setLgShow , children , submit , editSubmitCourse , isCreate}) => {
  const userClick = () => {
    submit();
  }
    return <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
            <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
    {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {children}  {/*course->craete*/}
    </Modal.Body>
    <Modal.Footer>
      <PrimaryButton text="Submit" onClick={isCreate ? submit : editSubmitCourse} />
      <SecondButton text="Close" onClick={() => setLgShow(false)}/>
    </Modal.Footer>
  </Modal>
}
export default Modalwrap;
//onClick={isCreate ? userClick : editSubmitStudent}