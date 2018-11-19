import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MOVIES_FEATURE_KEY,
  initialState as moviesInitialState,
  moviesReducer
} from './+state/movies.reducer';
import { MoviesEffects } from './+state/movies.effects';
import { MoviesFacade } from './+state/movies.facade';

export const moviesRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(MOVIES_FEATURE_KEY, moviesReducer, {
      initialState: moviesInitialState
    }),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [MoviesFacade]
})
export class MoviesModule {}
