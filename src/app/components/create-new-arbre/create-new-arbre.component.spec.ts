import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewArbreComponent } from './create-new-arbre.component';

describe('CreateNewArbreComponent', () => {
  let component: CreateNewArbreComponent;
  let fixture: ComponentFixture<CreateNewArbreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewArbreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewArbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
