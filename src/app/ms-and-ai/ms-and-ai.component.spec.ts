import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAndAiComponent } from './ms-and-ai.component';

describe('MsAndAiComponent', () => {
  let component: MsAndAiComponent;
  let fixture: ComponentFixture<MsAndAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsAndAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsAndAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
