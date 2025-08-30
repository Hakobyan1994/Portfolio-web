import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderrPortfolioComponent } from './coderr-portfolio.component';

describe('CoderrPortfolioComponent', () => {
  let component: CoderrPortfolioComponent;
  let fixture: ComponentFixture<CoderrPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoderrPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoderrPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
