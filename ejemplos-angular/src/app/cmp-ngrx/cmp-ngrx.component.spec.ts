import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpNgrxComponent } from './cmp-ngrx.component';

describe('CmpNgrxComponent', () => {
  let component: CmpNgrxComponent;
  let fixture: ComponentFixture<CmpNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
