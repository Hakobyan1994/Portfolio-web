import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPortfolioComponent } from './join-portfolio.component';

describe('JoinPortfolioComponent', () => {
  let component: JoinPortfolioComponent;
  let fixture: ComponentFixture<JoinPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
