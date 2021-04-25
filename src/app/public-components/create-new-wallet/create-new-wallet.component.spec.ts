import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewWalletComponent } from './create-new-wallet.component';

describe('CreateNewWalletComponent', () => {
  let component: CreateNewWalletComponent;
  let fixture: ComponentFixture<CreateNewWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
