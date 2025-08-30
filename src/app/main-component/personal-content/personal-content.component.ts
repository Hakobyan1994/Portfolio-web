import { Component, OnInit } from '@angular/core';
import { SocialContentComponent } from './social-content/social-content.component'
import { MainComponentComponent } from "../main-component.component";
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-personal-content',
  standalone: true,
  imports: [SocialContentComponent, MainComponentComponent, TranslateModule],
  templateUrl: './personal-content.component.html',
  styleUrl: './personal-content.component.scss'
})
export class PersonalContentComponent  {

  scrollToSection(event:Event,sectionId:string){
    event.preventDefault()
    const element=document.getElementById(sectionId)
    if(element){
      const offset = 150; 
      const yPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}