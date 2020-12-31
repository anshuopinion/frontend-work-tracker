import { useCallback } from "react";
import { actionTypes, useStateValue } from "store";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom";
export const useAuth = () => {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const login = useCallback(
    (userId: string, token: string) => {
      dispatch({
        type: actionTypes.SET_USER_ID,
        value: userId,
      });
      dispatch({
        type: actionTypes.SET_TOKEN,
        value: token,
      });
    },
    [dispatch]
  );
  const logout = useCallback(() => {
    dispatch({
      type: actionTypes.SET_USER_ID,
      value: null,
    });
    dispatch({
      type: actionTypes.SET_TOKEN,
      value: null,
    });
    cookie.remove("jwt");
    history.replace("/");
  }, [dispatch, history]);
  const setCookieLogin = useCallback(() => {
    const jwt = cookie.get("jwt");
    if (jwt) {
      const { token, userId } = JSON.parse(
        jwt.split(":").splice(1, 4).join(":")
      );
      if (token && userId) {
        login(userId, token);
      }
    }
  }, [login]);
  return { login, logout, setCookieLogin };
};
