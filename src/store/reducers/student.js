import * as actionType from '../action/type';

const initialState = {
  student: [],
  loading: false,
  error: null
};

function student(state = initialState, action) {
  switch (action.type) {
    case actionType.STUDENT_SAVE_START:
      return { ...state, student: [...state.student], loading: true, error: null };

    case actionType.STUDENT_SAVE_SUCCESS:
      const newStudentArray = [...state.list];
      newStudentArray.push(action.value);

      return { ...state, list: newStudentArray, loading: false, error: null };

    case actionType.STUDENT_SAVE_FAILURE:
      return { ...state, student: [...state.student], loading: false, error: action.value };

    case actionType.STUDENT_FETCH_START:
      return { ...state };

    case actionType.STUDENT_FETCH_SUCCESS:
      return { ...state, student: action.value };

    case actionType.STUDENT_FETCH_FAILURE:
      return { ...state };

    default:
      return state;
  }
}

export default student;