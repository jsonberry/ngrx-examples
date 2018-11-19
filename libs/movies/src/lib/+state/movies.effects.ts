import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { MoviesPartialState } from './movies.reducer';
import {
  LoadMovies,
  MoviesLoaded,
  MoviesLoadError,
  MoviesActionTypes
} from './movies.actions';

@Injectable()
export class MoviesEffects {
  @Effect()
  loadMovies$ = this.dataPersistence.fetch(MoviesActionTypes.LoadMovies, {
    run: (action: LoadMovies, state: MoviesPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new MoviesLoaded([]);
    },

    onError: (action: LoadMovies, error) => {
      console.error('Error', error);
      return new MoviesLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MoviesPartialState>
  ) {}
}
