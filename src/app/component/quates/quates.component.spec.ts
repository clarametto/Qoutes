import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatesComponent } from './quates.component';

describe('QuatesComponent', () => {
  let component: QuatesComponent;
  let fixture: ComponentFixture<QuatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
