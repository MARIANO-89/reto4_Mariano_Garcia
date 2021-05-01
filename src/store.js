import { createStore } from 'redux';
import moviesReducer from './reducers/movies';
let store = createStore(moviesReducer);

export default store;
