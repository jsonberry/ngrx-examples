// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { TOAST_FEATURE_KEY, ToastState } from './toast.reducer';

// // Lookup the 'Toast' feature state managed by NgRx
// const getToastState = createFeatureSelector<ToastState>(TOAST_FEATURE_KEY);

// const getLoaded = createSelector(
//   getToastState,
//   (state: ToastState) => state.loaded
// );
// const getError = createSelector(
//   getToastState,
//   (state: ToastState) => state.error
// );

// const getAllToast = createSelector(
//   getToastState,
//   getLoaded,
//   (state: ToastState, isLoaded) => {
//     return isLoaded ? state.list : [];
//   }
// );
// const getSelectedId = createSelector(
//   getToastState,
//   (state: ToastState) => state.selectedId
// );
// const getSelectedToast = createSelector(
//   getAllToast,
//   getSelectedId,
//   (toast, id) => {
//     const result = toast.find(it => it['id'] === id);
//     return result ? Object.assign({}, result) : undefined;
//   }
// );

// export const toastQuery = {
//   getLoaded,
//   getError,
//   getAllToast,
//   getSelectedToast
// };
