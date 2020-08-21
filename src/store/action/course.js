
import  *as actionType from './type'
import axios from 'axios'

export const saveCourseStart = () => {
    return {
        type:actionType.COURSE_SAVE_START
    }
}
export const saveCourseSuccsess = (newCourse) =>{
    return {
        type:actionType.COURSE_SAVE_SUCCESS,
        value: newCourse
    }
}
export const saveCourseFailure = (error) =>{
    return {
        type:actionType.COURSE_SAVE_FAILURE,
        value: error
    }
}

export const SaveCourse = (newCourse) => {
   return dispatch => {
    dispatch(saveCourseStart())
    try { 
        axios.post('https://recat-redux-lms.firebaseio.com/course.json?auth=' + localStorage.getItem('token'), {course: newCourse})
        
    .then((response) =>  {
         console.log("response...", response);
         dispatch(saveCourseSuccsess(newCourse))
         alert("Submit Successfully")
         
    })
    .catch(error => {
        console.log("error...", error);
        dispatch(saveCourseFailure(error))
    })

    } catch (error) {
        dispatch(saveCourseFailure(error))
    }
  } 
}

export const fetchCourseStart = () => {
    return { type: actionType.COURSE_FETCH_START }
  }
  
  export const fetchCourseSuccess = (listOfCourses) => {
    return { type: actionType.COURSE_FETCH_SUCCESS, value: listOfCourses }
  }
  
  export const fetchCourseFailure = () => {
    return { type: actionType.COURSE_SAVE_FAILURE }
  }
  
  export const  fetchCourses = () => {
    return dispatch => {
      dispatch(fetchCourseStart());
  
      axios.get('https://recat-redux-lms.firebaseio.com/course.json?auth=' + localStorage.getItem('token'))
        .then(response => {

          let courseList = [];
          const courseResult = response.data;
  
          Object.keys(courseResult).map(key => {
            console.log("keys...", key);
            courseList.push({ key: key, ...courseResult[key].course });
          })
          dispatch(fetchCourseSuccess(courseList));
        })
        .catch(error => {
          dispatch(fetchCourseFailure());
        });
    }
} 


  
