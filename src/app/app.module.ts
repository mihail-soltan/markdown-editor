import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { AppComponent } from './app.component';
import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/components/prism-typescript.min.js"
import "prismjs/components/prism-javascript.min.js";
import { NavbarComponent } from './components/navbar/navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
