import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhSinhNhatComponent } from './banh-sinh-nhat.component';

describe('BanhSinhNhatComponent', () => {
  let component: BanhSinhNhatComponent;
  let fixture: ComponentFixture<BanhSinhNhatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanhSinhNhatComponent]
    });
    fixture = TestBed.createComponent(BanhSinhNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
