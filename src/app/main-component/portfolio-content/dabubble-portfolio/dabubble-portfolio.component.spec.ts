import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabubblePortfolioComponent } from './dabubble-portfolio.component';

describe('DabubblePortfolioComponent', () => {
  let component: DabubblePortfolioComponent;
  let fixture: ComponentFixture<DabubblePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DabubblePortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DabubblePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
