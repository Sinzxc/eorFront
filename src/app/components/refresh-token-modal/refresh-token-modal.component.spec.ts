import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTokenModalComponent } from './refresh-token-modal.component';

describe('RefreshTokenModalComponent', () => {
  let component: RefreshTokenModalComponent;
  let fixture: ComponentFixture<RefreshTokenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefreshTokenModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefreshTokenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
