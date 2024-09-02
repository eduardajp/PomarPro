import { ComponentFixture, TestBed } from '@angular/core/testing';

import { colheitaComponent} from './colheita.component';

describe('colheitaComponent', () => {
  let component: colheitaComponent;
  let fixture: ComponentFixture<colheitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [colheitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(colheitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
