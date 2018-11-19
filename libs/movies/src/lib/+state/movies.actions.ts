import { Action } from '@ngrx/store';
import { Entity } from './movies.reducer';

export enum MoviesActionTypes {
  LoadMovies = '[Movies] Load Movies',
  MoviesLoaded = '[Movies] Movies Loaded',
  MoviesLoadError = '[Movies] Movies Load Error'
}

export class LoadMovies implements Action {
  readonly type = MoviesActionTypes.LoadMovies;
}

export class MoviesLoadError implements Action {
  readonly type = MoviesActionTypes.MoviesLoadError;
  constructor(public payload: any) {}
}

export class MoviesLoaded implements Action {
  readonly type = MoviesActionTypes.MoviesLoaded;
  constructor(public payload: Entity[]) {}
}

export type MoviesAction = LoadMovies | MoviesLoaded | MoviesLoadError;

export const fromMoviesActions = {
  LoadMovies,
  MoviesLoaded,
  MoviesLoadError
};
