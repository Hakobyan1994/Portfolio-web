import { Component } from '@angular/core';
import { PersonalContentComponent } from "./personal-content/personal-content.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { SkillContentComponent } from "./skill-content/skill-content.component";
import { PortfolioContentComponent } from "./portfolio-content/portfolio-content.component";
import { ContactContentComponent } from "./contact-content/contact-content.component";
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [PersonalContentComponent, PersonalInfoComponent, SkillContentComponent, PortfolioContentComponent, ContactContentComponent, FooterComponent, NavBarComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
