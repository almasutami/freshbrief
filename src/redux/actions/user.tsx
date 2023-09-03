export const searchArticle = (searchArticle: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "SEARCH_ARTICLE",
      payload: searchArticle,
    });
  };
};
