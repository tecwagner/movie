import { combineReducers } from "redux";

import MoviesReducer from "../src/store/reducer";

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;
