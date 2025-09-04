import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoflixPortfolioComponent } from './videoflix-portfolio.component';

describe('VideoflixPortfolioComponent', () => {
  let component: VideoflixPortfolioComponent;
  let fixture: ComponentFixture<VideoflixPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoflixPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoflixPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
