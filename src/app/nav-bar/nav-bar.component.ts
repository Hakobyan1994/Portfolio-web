import { Component, HostListener, ElementRef, Input, OnInit } from '@angular/core';;
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { GlobalVariableService } from '../global-variable.service';
import { Router } from '@angular/router';
import { off } from 'process';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent implements OnInit {
  isSticky: boolean = false;
  currentLanguage: string;
  addingAboutmeStyle: boolean = false;
  addingMySkillsStyle: boolean = false;
  addingMyPortfolioStyle: boolean = false;
  addingContactStyle: boolean = false;
  addShowNavbar: boolean = false;
  closeNavbar: boolean = false;
  showTempImage: boolean = false;
  showopenImage: boolean = false;
  checkTitleStatus: boolean = false;
  checkPositionType: boolean = false;
  buttonText:string;

  constructor(public globalVariable: GlobalVariableService, public translate: TranslateService, private eRef: ElementRef, private router: Router,) {
    this.currentLanguage = 'en'; 
    this.buttonText = 'de';
    this.translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit(): void {
    this.checkUrl()
  }

  checkUrl(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/impressum' || currentUrl === '/privacy-policy') {
      this.checkPositionType = true;
    } else {
      this.checkPositionType = false;
    }
  }

  switchLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'de'; 
      this.buttonText = 'en';  
    } else {
      this.currentLanguage = 'en'; 
      this.buttonText = 'de'; 
    }
    this.translate.use(this.currentLanguage);
    this.checkLanguageStatus();
    this.closeAfterLanguage()
  }
     
    
    closeAfterLanguage(){
     if(this.addShowNavbar){
      return this.closeNav();
      }
    }  


  checkLanguageStatus() {
    if (this.currentLanguage == "en") {
      this.globalVariable.isGlobalVariable = false;
      this.checkTitleStatus = false;
      this.globalVariable.checkFontsize = false;
    } else {
      this.globalVariable.isGlobalVariable = true;
      this.checkTitleStatus = true;
      this.globalVariable.checkFontsize = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.main-div');
    if (navbar) {
      this.isSticky = window.pageYOffset > 0;
    }
  }

  isImpressum(scrollTopValue: number | any) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        window.scrollTo({
          top: scrollTopValue,
          behavior: 'smooth'
        });
      }, 0);
    });
  }

  scrollToAboutme(event: Event, sectionId: string) {
    event.preventDefault();
    const offset = 130;
    if (this.router.url === '/impressum' || this.router.url === '/privacy-policy') {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 1000, offset);
      });
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 0, offset);
      });
      this.resetStyles();
      if (this.addShowNavbar && !this.addingAboutmeStyle) {
        this.addingAboutmeStyle = true;
        this.closeNav();
      } else {
        this.addingAboutmeStyle = true;
      }
    }
  }

  scrollToSections(sectionId: string, delay: number = 0, offset: number) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      }
    }, delay);
  }

  scrollToMySkills(event: Event, sectionId: string) {
    event.preventDefault();
    const offset = 150;
    if (this.router.url === '/impressum' || this.router.url === '/privacy-policy') {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 1000, offset);
      });
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 0, offset);
      });
    }
    if (this.addShowNavbar && !this.addingMySkillsStyle) {
      this.addingMySkillsStyle = true;
      this.closeNav();
    }
    this.resetStyles();
    this.addingMySkillsStyle = true;
  }

  scrollToMyPortfolio(event: Event, sectionId: string) {
    event.preventDefault();
    const offset = 130;
    if (this.router.url === '/impressum' || this.router.url === '/privacy-policy') {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 1000, offset);
      });
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 0, offset);
      });
      this.resetStyles();
      if (this.addShowNavbar && !this.addingMyPortfolioStyle) {
        this.addingMyPortfolioStyle = true;
        this.closeNav();
      } else {
        this.addingMyPortfolioStyle = true;
      }
    }
  }


  scrollToMyContact(event: Event, sectionId: string) {
    event.preventDefault();
    const offset = 130;
    if (this.router.url === '/impressum' || this.router.url === '/privacy-policy') {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 1000, offset);
      });
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSections(sectionId, 0, offset);
      });

      this.resetStyles();
      if (this.addShowNavbar && !this.addingContactStyle) {
        this.addingContactStyle = true;
        this.closeNav();
      } else {
        this.addingContactStyle = true;
      }
    }
  }


  scrollAllAbove() {
    let scrollTopValue: number = 0;
    if (this.router.url === '/impressum' || '/privacy-policy') {
      this.isImpressum(scrollTopValue);
    }
    else {
      window.scrollTo({
        top: scrollTopValue,
        behavior: 'smooth'
      })
    }
    this.resetStyles()
    if (this.addShowNavbar) {
      this.closeNav();
    }
  }

  navbarShow() {
    this.addShowNavbar = true;
    this.showopenImage = true;
    setTimeout(() => {
      this.showopenImage = false;
    }, 1000);
    this.closeNavbar = false;
  }

  closeNav() {
    this.closeNavbar = true;
    this.showTempImage = true;
    setTimeout(() => {
      this.showTempImage = false;
      this.addShowNavbar = false;
    }, 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    if (window.innerWidth > 756) {
      this.addShowNavbar = false;
      this.closeNavbar = false;
    }
  }

  blockScroll() {
    return document.body.style.overflowY = 'hidden'
  }

  disBlockScroll() {
    return document.body.style.overflowY = 'auto'
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.resetStyles()
    }
  }

  resetStyles() {
    this.addingContactStyle = false;
    this.addingMyPortfolioStyle = false;
    this.addingAboutmeStyle = false;
    this.addingMySkillsStyle = false;
  }
}