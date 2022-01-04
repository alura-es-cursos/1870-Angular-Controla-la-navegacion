import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMascotasComponent } from './grid-mascotas.component';

describe('GridMascotasComponent', () => {
  let component: GridMascotasComponent;
  let fixture: ComponentFixture<GridMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
