import { ADD_LIST, DELETE_LIST } from './tipe';

export const addList = (list) => (
  {
    type: ADD_LIST,
    data: list
  }
);

export const deleteList = (key) => (
  {
    type: DELETE_LIST,
    key: key
  }
);
