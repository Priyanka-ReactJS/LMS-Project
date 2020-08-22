
import  *as actionType from './type'
import axios from 'axios'

export const saveStudentStart = () => {
    return {
        type:actionType.STUDENT_SAVE_START
    }
}
export const saveStudentSuccsess = (newStudent) =>{
    return {
        type:actionType.STUDENT_SAVE_SUCCESS,
        value: newStudent
    }
}
export const saveStudentFailure = (error) =>{
    return {
        type:actionType.STUDENT_SAVE_FAILURE,
        value: error
    }
}

export const SaveStudent = (newStudent) => {
   return dispatch => {
    dispatch(saveStudentStart())
    try { 
        axios.post('https://recat-redux-lms.firebaseio.com/student.json?auth=' + localStorage.getItem('token'), {student: newStudent})
        
    .then((response) =>  {
         console.log("response...", response);
         dispatch(saveStudentSuccsess(newStudent))
         alert("Submit Successfully")
         
    })
    .catch(error => {
        console.log("error...", error);
        dispatch(saveStudentFailure(error))
    })

    } catch (error) {
        dispatch(saveStudentFailure(error))
    }
  } 
}

export const fetchStudentStart = () => {
    return { type: actionType.STUDENT_FETCH_START }
  }
  
  export const fetchStudentSuccess = (listOfStudent) => {
    return { type: actionType.STUDENT_FETCH_SUCCESS, value: listOfStudent }
  }
  
  export const fetchStudentFailure = () => {
    return { type: actionType.STUDENT_SAVE_FAILURE }
  }
  
  export const  fetchStudent = () => {
    return dispatch => {
      dispatch(fetchStudentStart());
  
      axios.get('https://recat-redux-lms.firebaseio.com/student.json?auth=' + localStorage.getItem('token'))
        .then(response => {

          let studentList = [];
          const studentResult = response.data;
  
          Object.keys(studentResult).map(key => {
            console.log("keys...", key);
            studentList.push({ key: key, ...studentResult[key].student });
          })
          dispatch(fetchStudentSuccess(studentList));
        })
        .catch(error => {
          dispatch(fetchStudentFailure());
        });
    }
} 


  
