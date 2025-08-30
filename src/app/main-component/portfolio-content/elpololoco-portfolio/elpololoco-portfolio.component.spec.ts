import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpololocoPortfolioComponent } from './elpololoco-portfolio.component';

describe('ElpololocoPortfolioComponent', () => {
  let component: ElpololocoPortfolioComponent;
  let fixture: ComponentFixture<ElpololocoPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElpololocoPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElpololocoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
