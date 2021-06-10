import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheListComponent } from './branche-list.component';

describe('BrancheListComponent', () => {
  let component: BrancheListComponent;
  let fixture: ComponentFixture<BrancheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
