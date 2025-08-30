import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalVariableService } from '../../global-variable.service';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})

export class PersonalInfoComponent  implements OnInit {
  checkHeight: boolean = false;
  checkFont: boolean = false;
  constructor(public globalVariable: GlobalVariableService) { }
  ngOnInit(): void {
    this.checkFontSize()
    AOS.init();
  }

  checkFontSize() {
    if (this.globalVariable.checkFontsize && window.innerWidth <= 350) {
       console.log(this.globalVariable.checkFontsize)
    } else {
      this.globalVariable.checkFontsize = false;
    }
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.checkDivHeight();
    this.checkFontSize();
  } 
  
  checkDivHeight() {
    if (this.globalVariable.isGlobalVariable && window.innerWidth <= 370) {
      this.checkHeight = true;
    } else {
      this.checkHeight = false;
    }
  }  
}