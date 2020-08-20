import *as actionType from '../action/type'


const initialState = {
    course: [{
        id: 1,
        courseName: 'First Course',
        category: 1,
        subCategory: 2,
        fees: 1000,
    },
    {
        id: 2,
        courseName: 'Second Course',
        category: 2,
        subCategory: 1,
        fees: 2000,
    }]
};

function course(state = initialState, action) {
   
    switch (action.type) {
        case actionType.COURSE_SAVE_START:
            return{ course: [...state.course], loading: true, error: null};

        case actionType.COURSE_SAVE_SUCCESS:
            const newCourseArray = [...state.course];
            newCourseArray.push(action.value)
            return {course:newCourseArray , loading: false, error: null};

        case actionType.COURSE_SAVE_FAILURE:
            return {...state, loading: false, error:action.value};

        case actionType.COURSE_FETCH_START:
            return { ...state };
          
         case actionType.COURSE_FETCH_SUCCESS:
                return { ...state  };
          
         case actionType.COURSE_FETCH_FAILURE:
                return { ...state };

    default:
        return state;
    }  
}
 
export default course; 