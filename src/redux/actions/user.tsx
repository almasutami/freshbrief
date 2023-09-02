export const searchArticle = (searchArticle: any) => {
  console.log("searchArticle", searchArticle);
  return (dispatch: any) => {
    dispatch({
      type: "SEARCH_ARTICLE",
      payload: searchArticle,
    });
  };
};
