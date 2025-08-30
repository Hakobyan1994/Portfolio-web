import { Component,OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import  AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-join-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join-portfolio.component.html',
  styleUrl: './join-portfolio.component.scss'
})
export class JoinPortfolioComponent  implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }
}
