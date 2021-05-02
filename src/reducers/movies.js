import { SET_MOVIES } from '../actions/movies';

const initialValue = { movies: [] };
export default (state = initialValue, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { movies: action.payload.movies };
        default:
            return state;
    }
};
