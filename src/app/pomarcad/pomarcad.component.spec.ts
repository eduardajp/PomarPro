import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarcadComponent } from './pomarcad.component';

describe('PomarcadComponent', () => {
  let component: PomarcadComponent;
  let fixture: ComponentFixture<PomarcadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PomarcadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PomarcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
