import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaViewchildComponent } from './directiva-viewchild.component';

describe('DirectivaViewchildComponent', () => {
  let component: DirectivaViewchildComponent;
  let fixture: ComponentFixture<DirectivaViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
