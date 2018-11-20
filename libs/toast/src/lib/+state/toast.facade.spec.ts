test.skip('skip', () => {})
// import { NgModule } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { readFirst } from '@nrwl/nx/testing';

// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule, Store } from '@ngrx/store';

// import { NxModule } from '@nrwl/nx';

// import { ToastEffects } from './toast.effects';
// import { ToastFacade } from './toast.facade';

// import { toastQuery } from './toast.selectors';
// import { LoadToast, ToastLoaded } from './toast.actions';
// import {
//   ToastState,
//   Entity,
//   initialState,
//   toastReducer
// } from './toast.reducer';

// interface TestSchema {
//   toast: ToastState;
// }

// describe('ToastFacade', () => {
//   let facade: ToastFacade;
//   let store: Store<TestSchema>;
//   let createToast;

//   beforeEach(() => {
//     createToast = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('used in NgModule', () => {
//     beforeEach(() => {
//       @NgModule({
//         imports: [
//           StoreModule.forFeature('toast', toastReducer, { initialState }),
//           EffectsModule.forFeature([ToastEffects])
//         ],
//         providers: [ToastFacade]
//       })
//       class CustomFeatureModule {}

//       @NgModule({
//         imports: [
//           NxModule.forRoot(),
//           StoreModule.forRoot({}),
//           EffectsModule.forRoot([]),
//           CustomFeatureModule
//         ]
//       })
//       class RootModule {}
//       TestBed.configureTestingModule({ imports: [RootModule] });

//       store = TestBed.get(Store);
//       facade = TestBed.get(ToastFacade);
//     });

//     /**
//      * The initially generated facade::loadAll() returns empty array
//      */
//     it('loadAll() should return empty list with loaded == true', async done => {
//       try {
//         let list = await readFirst(facade.allToast$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         facade.loadAll();

//         list = await readFirst(facade.allToast$);
//         isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(true);

//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });

//     /**
//      * Use `ToastLoaded` to manually submit list for state management
//      */
//     it('allToast$ should return the loaded list; and loaded flag == true', async done => {
//       try {
//         let list = await readFirst(facade.allToast$);
//         let isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);

//         store.dispatch(
//           new ToastLoaded([createToast('AAA'), createToast('BBB')])
//         );

//         list = await readFirst(facade.allToast$);
//         isLoaded = await readFirst(facade.loaded$);

//         expect(list.length).toBe(2);
//         expect(isLoaded).toBe(true);

//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });
//   });
// });
