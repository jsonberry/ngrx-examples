import { MoviesAction, MoviesActionTypes } from './movies.actions';

export const MOVIES_FEATURE_KEY = 'movies';

/**
 * Interface for the 'Movies' data used in
 *  - MoviesState, and
 *  - moviesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface MoviesState {
  list: Entity[]; // list of Movies; analogous to a sql normalized table
  selectedId?: string | number; // which Movies record has been selected
  loaded: boolean; // has the Movies list been loaded
  error?: any; // last none error (if any)
}

export interface MoviesPartialState {
  readonly [MOVIES_FEATURE_KEY]: MoviesState;
}

export const initialState: MoviesState = {
  list: [],
  loaded: false
};

export function moviesReducer(
  state: MoviesState = initialState,
  action: MoviesAction
): MoviesState {
  switch (action.type) {
    case MoviesActionTypes.MoviesLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
