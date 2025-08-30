import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
  constructor() { }
  isGlobalVariable: boolean = false;
  checkNavbarImpressum:boolean=false;
  checkFontsize:boolean=false;
}