import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHeaderComponentComponent } from './global-header-component.component';

describe('GlobalHeaderComponentComponent', () => {
  let component: GlobalHeaderComponentComponent;
  let fixture: ComponentFixture<GlobalHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
