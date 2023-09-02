const init_state = {
  searchArticle: "",
};

const reducer = (state = init_state, action: any) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "SEARCH_ARTICLE":
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

console.log("userReducer", init_state, reducer);

export default reducer;
