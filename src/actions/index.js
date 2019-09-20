import jsonPlaceholder from "../apis/jsonPlaceholder";

//defining a function that will return a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//creating new action creator
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_User", payload: response.data });
};
