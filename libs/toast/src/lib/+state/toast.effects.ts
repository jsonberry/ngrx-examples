import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { concat, delay, switchMapTo } from 'rxjs/operators';
import {
  ButterToast,
  EatToast,
  MakeToast,
  ToastActionTypes,
  ToastBread
} from './toast.actions';

@Injectable()
export class ToastEffects {
  @Effect()
  makeToast$ = this.actions$.pipe(
    ofType<MakeToast>(ToastActionTypes.MakeToast),
    switchMapTo(
      of(new ToastBread())
        .pipe(delay(3000))
        .pipe(concat(of(new ButterToast()).pipe(delay(3000))))
        .pipe(concat(of(new EatToast()).pipe(delay(3000))))
    )
  );

  constructor(private actions$: Actions) {}
}
