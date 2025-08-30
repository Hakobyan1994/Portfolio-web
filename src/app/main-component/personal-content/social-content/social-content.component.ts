import { Component,OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-social-content',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './social-content.component.html',
  styleUrl: './social-content.component.scss'
})
export class SocialContentComponent implements  OnInit{
  
  ngOnInit(): void {
    AOS.init();
  }


} 
