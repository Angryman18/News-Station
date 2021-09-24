import React from "react";

const initialState = {
  loading: false,
  status: false,
  data: null,
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "pending":
      return { loading: true, status: false, data: null };
    case "completed":
      return { loading: false, status: true, data: actions.result };
    case "error":
      return { loading: false, status: false, data: actions.errMsg };
    default:
      return state;
  }
};

const useFetch = (requestedFunction) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const sendReq = React.useCallback(async () => {
    try {
        dispatch({ type: "pending" });
        const getData = await requestedFunction();
        dispatch({ type: "completed", result: getData });
      } catch (err) {
        dispatch({ type: "error", errMsg: err.message });
      }
  }, [requestedFunction])    

  return {
    ...state,
    sendReq,
  };
};

export default useFetch;
