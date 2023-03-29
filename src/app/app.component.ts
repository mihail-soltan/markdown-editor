import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  lightmode: boolean = false;

  constructor(private shared: SharedService){}
  title = 'ng-markdown-editor';

  code: string = `\`\`\`typescript
  const dog = () => {console.log("woof")}
  
  \`\`\`

  `;
  blockQuote: string = `
    > Testing block quote
  `
  ngOnInit(){
    this.shared.lightmode.subscribe((theme)=>{
      this.lightmode = theme;
    })
  }
}
