import { Entity, MoviesState } from './movies.reducer';
import { moviesQuery } from './movies.selectors';

describe('Movies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMoviesId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createMovies = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      movies: {
        list: [
          createMovies('PRODUCT-AAA'),
          createMovies('PRODUCT-BBB'),
          createMovies('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Movies Selectors', () => {
    it('getAllMovies() should return the list of Movies', () => {
      const results = moviesQuery.getAllMovies(storeState);
      const selId = getMoviesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedMovies() should return the selected Entity', () => {
      const result = moviesQuery.getSelectedMovies(storeState);
      const selId = getMoviesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = moviesQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = moviesQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
