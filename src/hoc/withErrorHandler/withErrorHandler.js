import React, { useState, useEffect } from 'react';
import Modalwrap from '../../component/Modal/modal'



const withErrorHandler = (WrapedComponent, axios) => {

    return (props) => {
        const[error,setError] = useState(null);

        useEffect(() => {
            const reqInterc = axios.interceptors.request.use(req => {
                setError(null)
                console.log("request...", req);
                return req   
            })
 
            const resInterc = axios.interceptors.response.use(res => res, (error) => {
                setError(error)
                console.log("....Error....", error);
                throw error
                
            })     
            return () => {
               axios.interceptors.request.eject(reqInterc) ; //it is for clear memories
               axios.interceptors.response.eject(resInterc); //it is for clear memories
            }
        }, [])
        const handelErrorConfrimation = () => {
            setError(null);

        }
        return <> 
        <Modalwrap title="Error Massage" lgShow={error} setLgShow={handelErrorConfrimation}>
             {error && error.message}
          </Modalwrap>
          <WrapedComponent {...props} />
        </>
       
 
    }
}
export default withErrorHandler;