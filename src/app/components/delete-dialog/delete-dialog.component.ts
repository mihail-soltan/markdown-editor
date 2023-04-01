import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  darkmode: boolean = false;
  constructor(private shared: SharedService){
  }

  ngOnInit(): void {
    this.shared.darkmode.subscribe((theme)=>{
      this.darkmode = theme;
    })
  }
}
