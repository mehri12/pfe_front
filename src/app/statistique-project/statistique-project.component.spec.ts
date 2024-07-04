import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueProjectComponent } from './statistique-project.component';

describe('StatistiqueProjectComponent', () => {
  let component: StatistiqueProjectComponent;
  let fixture: ComponentFixture<StatistiqueProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueProjectComponent]
    });
    fixture = TestBed.createComponent(StatistiqueProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
