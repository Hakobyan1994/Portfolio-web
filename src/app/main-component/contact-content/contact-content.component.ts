import { Component, inject,OnInit} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact-content',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  host: { ngSkipHydration: 'true' },
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.scss'
})
export class ContactContentComponent  implements OnInit{


   ngOnInit(): void {
     AOS.init();
   }
  

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  nameRequired: boolean = false;
  nameValid: boolean = false;
  emailRequired: boolean = false;
  emailValid: boolean = false;
  messageRequired: boolean = false;
  messageValid: boolean = false;
  checkValidAll: boolean = false;
  checkBoxChecked: boolean = false;
  checkedError: boolean = false
  mailTest: boolean = true;
  http = inject(HttpClient);
  emailSend: boolean = false;
  emailText: string = 'E-mail was sent successfully'

  post = {
    endPoint: 'https://mesrop-hakobyan.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  
  checkName() {
    let maxLetters=10;
    let messageName = this.contactData.name;
    let formatedName = messageName.replace(/\n/g, '');
    let finalName = '';
    for (let i = 0; i < formatedName.length; i += maxLetters) {
      finalName += formatedName.slice(i, i + maxLetters) + '\n';
    }
    this.contactData.name = finalName.trim();

    this.nameRequired = this.contactData.name.length < 6;
    this.nameValid = this.contactData.name.length >= 6;
    if (this.nameValid) {
      this.checkValidAll = false;
    }
  }

  checkEmail() { 
    const regex = this.checkRegex();
    const validTLDs = this.checkDomainEnding();
    if (this.contactData.email.length === 0) {
      this.checkRequiredVariable();
    } else if (!regex.test(this.contactData.email)) {
      this.checkRequiredVariable();
    } else {
      const domain = this.contactData.email.split('.').pop();
      if (domain && validTLDs.includes(domain)) {
        this.checkEmailVariable();
      } else {
        this.checkRequiredVariable();
      }
    }
  }

  checkRequiredVariable() {
    this.emailRequired = true;
    this.emailValid = false;
  }


  checkEmailVariable() {
    this.emailRequired = false;
    this.emailValid = true;
    this.checkValidAll = false;
  }

  checkRegex() {
    return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  }

  checkDomainEnding() {
    return ['com', 'org', 'net', 'info', 'biz', 'name', 'pro', 'gov', 'edu', 'mil', 'de', 'uk', 'cn', 'jp', 'fr', 'it', 'ru', 'br', 'in', 'au', 'ca', 'us', 'nl', 'es', 'ch', 'se', 'mx', 'kr', 'tr', 'za', 'am'];
  }



  checkTextArea() {
    let maxLengthPerLine = this.checkAreaWidth();
    let message = this.contactData.message;
    let formattedMessage = message.replace(/\n/g, '');
    let finalMessage = '';
    for (let i = 0; i < formattedMessage.length; i += maxLengthPerLine) {
      finalMessage += formattedMessage.slice(i, i + maxLengthPerLine) + '\n';
    }
    this.contactData.message = finalMessage.trim();
    this.messageRequired = this.contactData.message.length < 10
    this.messageValid = this.contactData.message.length >= 10;
    if (this.messageValid) {
      this.checkValidAll = false;
    }
  }

  checkAreaWidth() {
    let maxLengthPerLine;
    if (window.innerWidth <= 420) {
      maxLengthPerLine = 18;
    }
    else if (window.innerWidth <= 507) {
      maxLengthPerLine = 25;
    } else if (window.innerWidth <= 696) {
      maxLengthPerLine = 40;
    } else if (window.innerWidth <= 780) {
      maxLengthPerLine = 45;
    } else {
      maxLengthPerLine = 65;
    }
    return maxLengthPerLine;
  }

  checkBox(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.checkBoxChecked = inputElement.checked;
    this.checkedError = !this.checkBoxChecked;
  }

  resetForm() {
    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
    this.nameValid = false;
    this.emailValid = false;
    this.messageValid = false;
    this.checkBoxChecked = false;
    this.mailTest = true;
    this.checkBoxChecked = false;
    this.checkValidAll = false;
  }

  onSubmit() {
    this.checkAllFields();
    this.removeSpaceOnData();
    if (this.nameValid && this.emailValid && this.messageValid && this.checkBoxChecked && this.mailTest && !this.checkedError) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.resetForm();
            this.checkedError = false;
            this.checkBoxChecked = false;
            this.emailSend = true;
            this.removeEmailMessage();
          }
        });
    } else {
      this.checkValidAll = true;
      this.checkedError = !this.checkBoxChecked
    }
  }

  checkAllFields() {
    this.checkName();
    this.checkEmail();
    this.checkTextArea();
  }

  removeSpaceOnData() {
    this.contactData.name = this.contactData.name.trim();
    this.contactData.message = this.contactData.message.trim();
  }

  scrollToAllAbove() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  removeEmailMessage() {
    return setTimeout(() => {
      this.emailSend = false;
    }, 3000);
  }
}