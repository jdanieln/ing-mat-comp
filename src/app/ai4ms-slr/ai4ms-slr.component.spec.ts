import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ai4msSlrComponent } from './ai4ms-slr.component';

describe('Ai4msSlrComponent', () => {
  let component: Ai4msSlrComponent;
  let fixture: ComponentFixture<Ai4msSlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ai4msSlrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ai4msSlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
