import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import  AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-elpololoco-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './elpololoco-portfolio.component.html',
  styleUrl: './elpololoco-portfolio.component.scss'
})
export class ElpololocoPortfolioComponent implements OnInit  {
 
  ngOnInit() {
    AOS.init();
  }
}
