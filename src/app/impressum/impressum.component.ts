import { Component,Input } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common'; 
 

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FooterComponent, TranslateModule, NavBarComponent,CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  isImpressumPage: boolean = true;
}
