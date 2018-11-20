import { Action } from '@ngrx/store';

export enum ToastActionTypes {
  MakeToast = '[Toast] Make Toast',
  ToastBread = '[Toast] Toast Bread',
  ButterToast = '[Toast] Butter Toast',
  EatToast = '[Toast] Eat Toast'
}

export class MakeToast implements Action {
  readonly type = ToastActionTypes.MakeToast;
}

export class ToastBread implements Action {
  readonly type = ToastActionTypes.ToastBread;
}

export class ButterToast implements Action {
  readonly type = ToastActionTypes.ButterToast;
}

export class EatToast implements Action {
  readonly type = ToastActionTypes.EatToast;
}

export type ToastAction = ToastBread | ButterToast | EatToast;

export const fromToastActions = {
  MakeToast,
  ToastBread,
  ButterToast,
  EatToast,
};
