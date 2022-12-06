import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();
export const useGlobalCtx = () => useContext(GlobalContext);

const initialState = {
  prevUrl: null,
  nextUrl: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HEADER": {
      const { prevUrl, nextUrl } = action.payload;
      return {
        ...state,
        prevUrl,
        nextUrl,
      };
    }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setHeader = ({ prevUrl, nextUrl }) =>
    dispatch({ type: "SET_HEADER", payload: { prevUrl, nextUrl } });

  return (
    <GlobalContext.Provider value={{ ...state, setHeader }}>
      {children}
    </GlobalContext.Provider>
  );
};
