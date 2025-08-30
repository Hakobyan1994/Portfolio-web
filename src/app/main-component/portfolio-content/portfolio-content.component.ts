import { Component,OnInit } from '@angular/core';
import { JoinPortfolioComponent } from './join-portfolio/join-portfolio.component';
import { ElpololocoPortfolioComponent } from './elpololoco-portfolio/elpololoco-portfolio.component';
import { DabubblePortfolioComponent } from './dabubble-portfolio/dabubble-portfolio.component';
import { TranslateModule } from '@ngx-translate/core';
import  AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-portfolio-content',
  standalone: true,
  imports: [JoinPortfolioComponent,
    ElpololocoPortfolioComponent,
    DabubblePortfolioComponent,
    TranslateModule
  ],
  templateUrl: './portfolio-content.component.html',
  styleUrl: './portfolio-content.component.scss'
})
export class PortfolioContentComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();  
  }
}
