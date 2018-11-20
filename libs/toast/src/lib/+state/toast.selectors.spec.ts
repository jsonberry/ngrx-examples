test.skip('skip', () => {})
// import { Entity, ToastState } from './toast.reducer';
// import { toastQuery } from './toast.selectors';

// describe('Toast Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getToastId = it => it['id'];

//   let storeState;

//   beforeEach(() => {
//     const createToast = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       toast: {
//         list: [
//           createToast('PRODUCT-AAA'),
//           createToast('PRODUCT-BBB'),
//           createToast('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });

//   describe('Toast Selectors', () => {
//     it('getAllToast() should return the list of Toast', () => {
//       const results = toastQuery.getAllToast(storeState);
//       const selId = getToastId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelectedToast() should return the selected Entity', () => {
//       const result = toastQuery.getSelectedToast(storeState);
//       const selId = getToastId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = toastQuery.getLoaded(storeState);

//       expect(result).toBe(true);
//     });

//     it("getError() should return the current 'error' storeState", () => {
//       const result = toastQuery.getError(storeState);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
