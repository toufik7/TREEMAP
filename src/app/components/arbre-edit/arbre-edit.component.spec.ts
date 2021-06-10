import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbreEditComponent } from './arbre-edit.component';

describe('ArbreEditComponent', () => {
  let component: ArbreEditComponent;
  let fixture: ComponentFixture<ArbreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbreEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
