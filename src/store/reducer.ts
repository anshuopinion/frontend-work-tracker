// export enum roleType {
//   student = "student",
//   teacher = "teacher",
//   admin = "admin",
// }
export interface IState {
  userId: string | null;
  token: string | null;
  // role: roleType | null;
}

export const initialState: IState = {
  userId: null,
  token: null,
  // role: null,
};

export const actionTypes = {
  SET_OPEN_BOOK: "SET_OPEN_BOOK",
  SET_OPEN_LIST_EDIT: "SET_OPEN_LIST_EDIT",
  SET_USER_ID: "SET_USER_ID",
  SET_TOKEN: "SET_TOKEN",
  // SET_ROLE: "SET_ROLE",
  // SET_LOGIN: "SET_LOGIN",
  // SET_LOGOUT: "SET_LOGOUT",
};

const reducer = (state: IState, action: any) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_OPEN_BOOK:
      return { ...state, openBook: action.value };
    case actionTypes.SET_OPEN_LIST_EDIT:
      return { ...state, openListEdit: action.value };
    case actionTypes.SET_USER_ID:
      return { ...state, userId: action.value };
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.value };
    // case actionTypes.SET_ROLE:
    //   return { ...state, role: action.value };

    default:
      return state;
  }
};

export default reducer;
