import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDatlhesComponent } from './projeto-datlhes.component';

describe('ProjetoDatlhesComponent', () => {
  let component: ProjetoDatlhesComponent;
  let fixture: ComponentFixture<ProjetoDatlhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoDatlhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoDatlhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
