const init_state = {
  searchArticle: "",
};

const reducer = (state = init_state, action: any) => {
  switch (action.type) {
    case "SEARCH_ARTICLE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
