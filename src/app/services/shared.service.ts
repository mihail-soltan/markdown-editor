import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentTheme = localStorage.getItem('lightmode');
  lightmode = new BehaviorSubject(eval(this.currentTheme!));

  constructor() { }
  
  toggleTheme() {
    if (this.lightmode.value === false) {
      this.lightmode.next(true);
      localStorage.setItem('lightmode', 'true');
    } else {
      this.lightmode.next(false);
      localStorage.setItem('lightmode', 'false');
    }
  }
  
}
