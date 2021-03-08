import { ADD_LIST, DELETE_LIST } from './tipe';

const initialState = {
  List: []
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        List: state.List.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_LIST:
      return {
        ...state,
        List: state.List.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default listReducer;