import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafListComponent } from './leaf-list.component';

describe('LeafListComponent', () => {
  let component: LeafListComponent;
  let fixture: ComponentFixture<LeafListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
