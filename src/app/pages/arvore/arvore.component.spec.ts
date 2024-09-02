import { ComponentFixture, TestBed } from '@angular/core/testing';

import { arvoreComponent } from './arvore.component';

describe('ArvoreComponent', () => {
  let component: arvoreComponent;
  let fixture: ComponentFixture<arvoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [arvoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(arvoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
