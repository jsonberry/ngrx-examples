import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToastEffects } from './+state/toast.effects';
import { toastReducer, TOAST_FEATURE_KEY } from './+state/toast.reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TOAST_FEATURE_KEY, toastReducer),
    EffectsModule.forFeature([ToastEffects])
  ],
  providers: [ToastEffects]
})
export class ToastModule {}
