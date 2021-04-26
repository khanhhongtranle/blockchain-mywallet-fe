import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingModalComponentComponent } from './loading-modal-component.component';

describe('LoadingModalComponentComponent', () => {
  let component: LoadingModalComponentComponent;
  let fixture: ComponentFixture<LoadingModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
