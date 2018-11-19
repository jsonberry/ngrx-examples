import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { MoviesEffects } from './movies.effects';
import { LoadMovies, MoviesLoaded } from './movies.actions';

describe('MoviesEffects', () => {
  let actions: Observable<any>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MoviesEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(MoviesEffects);
  });

  describe('loadMovies$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMovies() });
      expect(effects.loadMovies$).toBeObservable(
        hot('-a-|', { a: new MoviesLoaded([]) })
      );
    });
  });
});
