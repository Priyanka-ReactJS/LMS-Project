import * as actionType from '../action/type';

const initialState = {
  course: [],
  loading: false,
  error: null
};

function course(state = initialState, action) {
  switch (action.type) {
    case actionType.COURSE_SAVE_START:
      return { ...state, course: [...state.course], loading: true, error: null };

    case actionType.COURSE_SAVE_SUCCESS:
      const newCourseArray = [...state.list];
      newCourseArray.push(action.value);

      return { ...state, list: newCourseArray, loading: false, error: null };

    case actionType.COURSE_SAVE_FAILURE:
      return { ...state, course: [...state.course], loading: false, error: action.value };

    case actionType.COURSE_FETCH_START:
      return { ...state };

    case actionType.COURSE_FETCH_SUCCESS:
      return { ...state, course: action.value };

    case actionType.COURSE_FETCH_FAILURE:
      return { ...state };

    default:
      return state;
  }
}

export default course;