import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { initialState, IState } from "./reducer";

interface Actions {
  type: string;
  value: any;
}

export const StateContext = createContext<[IState, Dispatch<Actions>]>([
  initialState,
  () => initialState,
]);
type StateProviderProps = {
  reducer: React.Reducer<IState, Actions>;
  children: React.ReactElement;
  initialState: IState;
};
export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
  initialState,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
