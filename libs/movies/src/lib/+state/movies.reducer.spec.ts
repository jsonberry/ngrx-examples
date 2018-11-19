import { MoviesLoaded } from './movies.actions';
import {
  MoviesState,
  Entity,
  initialState,
  moviesReducer
} from './movies.reducer';

describe('Movies Reducer', () => {
  const getMoviesId = it => it['id'];
  let createMovies;

  beforeEach(() => {
    createMovies = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Movies actions ', () => {
    it('should return set the list of known Movies', () => {
      const moviess = [
        createMovies('PRODUCT-AAA'),
        createMovies('PRODUCT-zzz')
      ];
      const action = new MoviesLoaded(moviess);
      const result: MoviesState = moviesReducer(initialState, action);
      const selId: string = getMoviesId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = moviesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
