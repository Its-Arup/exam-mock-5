import axios from "axios";
import {
  EDITUSERFALIURE,
  EDITUSERREQUEST,
  EDITUSERSUCCESS,
  GETALLUSERSFALIURE,
  GETALLUSERSREQUEST,
  GETALLUSERSSUCCESS,
  USERCREATEFALIURE,
  USERCREATEREQUEST,
  USERCREATESUCCEESS,
} from "./actionType";

const baseURL = "https://exam-mock-5.onrender.com/users/contacts";

export const createUser = (payload) => (dispatch) => {
  dispatch({ type: USERCREATEREQUEST });
  axios
    .post(baseURL, payload)
    .then((res) => {
      dispatch({ type: USERCREATESUCCEESS, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({ type: USERCREATEFALIURE });
    });
};

export const getAlluser = (params) => (dispatch) => {
  dispatch({ type: GETALLUSERSREQUEST });
  axios({
    method : "get",
    url : baseURL,
    params : params,
  })
    .then((res) => {
      dispatch({ type: GETALLUSERSSUCCESS, payload: res.data.users });
    })
    .catch((err) => {
      dispatch({ type: GETALLUSERSFALIURE });
    });
};

export const editUser = (id, params) => (dispatch) => {
  dispatch({ type: EDITUSERREQUEST });
  axios
    .patch(`${baseURL}/${id}`, params)
    .then((res) => {
      dispatch({ type: EDITUSERSUCCESS,payload : res.data.users });
    })
    .catch((err) => {
      dispatch({ type: EDITUSERFALIURE });
    });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: EDITUSERREQUEST });
  axios
    .delete(`${baseURL}/${id}`)
    .then((res) => {
      dispatch({ type: EDITUSERSUCCESS,payload : res.data.users });
    })
    .catch((err) => {
      dispatch({ type: EDITUSERFALIURE });
    });
};

