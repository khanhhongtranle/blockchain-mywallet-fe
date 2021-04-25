import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessMyWalletComponent } from './access-my-wallet.component';

describe('AccessMyWalletComponent', () => {
  let component: AccessMyWalletComponent;
  let fixture: ComponentFixture<AccessMyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessMyWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessMyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
