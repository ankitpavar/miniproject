import axios from 'axios';
import {
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  
} from '../constants/projectConstants';

export const projectDetails = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get('/project');

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProject = ({name, summary, cost, date}) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
    });
    const { data } = await axios.post(`/project`, {name, summary, cost, date});

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload: message,
    });
  }
};