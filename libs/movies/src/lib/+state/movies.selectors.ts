import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOVIES_FEATURE_KEY, MoviesState } from './movies.reducer';

// Lookup the 'Movies' feature state managed by NgRx
const getMoviesState = createFeatureSelector<MoviesState>(MOVIES_FEATURE_KEY);

const getLoaded = createSelector(
  getMoviesState,
  (state: MoviesState) => state.loaded
);
const getError = createSelector(
  getMoviesState,
  (state: MoviesState) => state.error
);

const getAllMovies = createSelector(
  getMoviesState,
  getLoaded,
  (state: MoviesState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getMoviesState,
  (state: MoviesState) => state.selectedId
);
const getSelectedMovies = createSelector(
  getAllMovies,
  getSelectedId,
  (movies, id) => {
    const result = movies.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const moviesQuery = {
  getLoaded,
  getError,
  getAllMovies,
  getSelectedMovies
};
