import { ToastAction, ToastActionTypes } from './toast.actions';

export const TOAST_FEATURE_KEY = 'toast';

export interface ToastState {
  status: string;
}

export const initialState: ToastState = {
  status: 'just bread...'
};

export function toastReducer(
  state: ToastState = initialState,
  action: ToastAction
): ToastState {
  switch (action.type) {
    case ToastActionTypes.ToastBread:
      state = {
        ...state,
        status: 'toasting bread...'
      };
      break;

    case ToastActionTypes.ButterToast:
      state = {
        ...state,
        status: 'buttering toast...'
      }
    break;

    case ToastActionTypes.EatToast:
      state = {
        ...state,
        status: 'eating toast....'
      }
  }

  return state;
}
