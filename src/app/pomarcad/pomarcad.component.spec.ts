import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomarCadComponent } from './pomarcad.component';

describe('PomarcadComponent', () => {
  let component: PomarCadComponent;
  let fixture: ComponentFixture<PomarCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PomarCadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PomarCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
