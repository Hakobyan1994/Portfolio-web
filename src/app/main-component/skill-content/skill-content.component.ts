import { Component,OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skill-content',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-content.component.html',
  styleUrl: './skill-content.component.scss'
})
export class SkillContentComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault(); 
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; 
      const yPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}