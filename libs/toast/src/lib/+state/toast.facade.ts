// import { Injectable } from '@angular/core';

// import { select, Store } from '@ngrx/store';

// import { ToastPartialState } from './toast.reducer';
// import { toastQuery } from './toast.selectors';
// import { LoadToast } from './toast.actions';

// @Injectable()
// export class ToastFacade {
//   loaded$ = this.store.pipe(select(toastQuery.getLoaded));
//   allToast$ = this.store.pipe(select(toastQuery.getAllToast));
//   selectedToast$ = this.store.pipe(select(toastQuery.getSelectedToast));

//   constructor(private store: Store<ToastPartialState>) {}

//   loadAll() {
//     this.store.dispatch(new LoadToast());
//   }
// }
