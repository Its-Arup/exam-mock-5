import {
  DELETEUSERFALIURE,
  DELETEUSERREQUEST,
  DELETEUSERSUCCEESS,
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

const initState = {
  isLodding: false,
  isError: false,
  users: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERCREATEREQUEST:
      return {
        ...state,
        isLodding: true,
      };
    case USERCREATESUCCEESS:
      return {
        ...state,
        isLodding: false,
        users: [...state.users, payload],
      };
    case USERCREATEFALIURE:
      return {
        ...state,
        isLodding: false,
        isError: true,
      };
    case GETALLUSERSREQUEST:
      return {
        ...state,
        isLodding: true,
      };
    case GETALLUSERSSUCCESS :
      return {
        ...state,
        users: payload,
        isLodding: false,
      }
    case GETALLUSERSFALIURE :
      return {
        ...state,
        isLodding: false,
        isError: true,
      }
    case EDITUSERFALIURE :
      return {
        ...state,
        isLodding: false,
        isError: true,
      }
    case EDITUSERREQUEST :
      return {
        ...state,
        isLodding: true,
      }
    case EDITUSERSUCCESS :
      return{
        ...state,
        users: payload,
        isLodding: false,
      }
    case DELETEUSERFALIURE :
      return {
        ...state,
        isLodding: false,
        isError: true,
      }
    case DELETEUSERSUCCEESS :
      return {
        ...state,
        users: payload,
        isLodding: false,
      }
    case DELETEUSERREQUEST :
      return {
        ...state,
        isLodding: true,
      }

    default:
      return state;
  }
};
