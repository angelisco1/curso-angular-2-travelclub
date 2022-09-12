import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesDinamicosComponent } from './componentes-dinamicos.component';

describe('ComponentesDinamicosComponent', () => {
  let component: ComponentesDinamicosComponent;
  let fixture: ComponentFixture<ComponentesDinamicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesDinamicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesDinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
