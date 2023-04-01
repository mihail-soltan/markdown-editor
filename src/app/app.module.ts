import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/components/prism-typescript.min.js"
import "prismjs/components/prism-javascript.min.js";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClientModule})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
