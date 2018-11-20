import { async, TestBed } from '@angular/core/testing';
import { ToastModule } from './toast.module';

describe('ToastModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToastModule).toBeDefined();
  });
});
