import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxusComponent } from './vxus.component';

describe('VxusComponent', () => {
  let component: VxusComponent;
  let fixture: ComponentFixture<VxusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VxusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VxusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
