import { Component,OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import  AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-coderr-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './coderr-portfolio.component.html',
  styleUrl: './coderr-portfolio.component.scss'
})
export class CoderrPortfolioComponent implements OnInit {

    ngOnInit(): void {
      AOS.init();
    }

}
