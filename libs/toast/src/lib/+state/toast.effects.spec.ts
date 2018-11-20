import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ButterToast, EatToast, MakeToast, ToastBread } from './toast.actions';
import { ToastEffects } from './toast.effects';

describe('ToastEffects', () => {
  let actions: Observable<any>;
  let effects: ToastEffects;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [ToastEffects, provideMockActions(() => actions)]
    });

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    effects = TestBed.get(ToastEffects);
  });

  describe('makeToast$', () => {
    it('should behave...', () => {
      scheduler.run(({ hot, expectObservable }) => {
        actions = hot('a', { a: new MakeToast() });

        expectObservable(effects.makeToast$).toBe(
          '- 2999ms a 2999ms b 2999ms c',
          {
            a: new ToastBread(),
            b: new ButterToast(),
            c: new EatToast()
          }
        );
      });
    });
  });
});
