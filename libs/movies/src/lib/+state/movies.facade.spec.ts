import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { MoviesEffects } from './movies.effects';
import { MoviesFacade } from './movies.facade';

import { moviesQuery } from './movies.selectors';
import { LoadMovies, MoviesLoaded } from './movies.actions';
import {
  MoviesState,
  Entity,
  initialState,
  moviesReducer
} from './movies.reducer';

interface TestSchema {
  movies: MoviesState;
}

describe('MoviesFacade', () => {
  let facade: MoviesFacade;
  let store: Store<TestSchema>;
  let createMovies;

  beforeEach(() => {
    createMovies = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('movies', moviesReducer, { initialState }),
          EffectsModule.forFeature([MoviesEffects])
        ],
        providers: [MoviesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(MoviesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allMovies$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allMovies$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `MoviesLoaded` to manually submit list for state management
     */
    it('allMovies$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allMovies$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new MoviesLoaded([createMovies('AAA'), createMovies('BBB')])
        );

        list = await readFirst(facade.allMovies$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
