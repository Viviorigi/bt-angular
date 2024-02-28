import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterviewadminComponent } from './masterviewadmin.component';

describe('MasterviewadminComponent', () => {
  let component: MasterviewadminComponent;
  let fixture: ComponentFixture<MasterviewadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterviewadminComponent]
    });
    fixture = TestBed.createComponent(MasterviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
