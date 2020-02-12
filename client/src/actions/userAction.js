import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  USER_ERRORS
} from './types';

export const getUsers = () => async dispatch => {
  try {
    const result = await axios.get('/api/users');
    dispatch({
      type: GET_USERS,
      payload: result.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
      payload: err.response.data
    });
  }
};
