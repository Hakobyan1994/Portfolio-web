import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { GlobalVariableService } from '../global-variable.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component"; 

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, CommonModule, NavBarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public globalVariable:GlobalVariableService){
  }
}
