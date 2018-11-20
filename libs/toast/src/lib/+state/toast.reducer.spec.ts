test.skip('skip', () => {})
// import { ToastLoaded } from './toast.actions';
// import {
//   ToastState,
//   Entity,
//   initialState,
//   toastReducer
// } from './toast.reducer';

// describe('Toast Reducer', () => {
//   const getToastId = it => it['id'];
//   let createToast;

//   beforeEach(() => {
//     createToast = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('valid Toast actions ', () => {
//     it('should return set the list of known Toast', () => {
//       const toasts = [createToast('PRODUCT-AAA'), createToast('PRODUCT-zzz')];
//       const action = new ToastLoaded(toasts);
//       const result: ToastState = toastReducer(initialState, action);
//       const selId: string = getToastId(result.list[1]);

//       expect(result.loaded).toBe(true);
//       expect(result.list.length).toBe(2);
//       expect(selId).toBe('PRODUCT-zzz');
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the initial state', () => {
//       const action = {} as any;
//       const result = toastReducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
