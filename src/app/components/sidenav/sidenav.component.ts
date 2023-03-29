import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  darkmode: boolean = false;

  constructor(private shared: SharedService){}
  
  ngOnInit(){
    this.shared.darkmode.subscribe((theme) =>{
      this.darkmode = theme;
    })
  }

  toggleTheme(){
    this.shared.toggleTheme()
    console.log(this.darkmode)
  }
}
