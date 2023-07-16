import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppConfirmmessageComponent } from '../app-confirmmessage/app-confirmmessage.component';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent {
  
  constructor(private dialog : MatDialog){

  }

  open()
  {
    let dialogRef= this.dialog.open(AppConfirmmessageComponent,
      {enterAnimationDuration:'250ms',exitAnimationDuration:'250ms'});
    dialogRef.afterClosed().subscribe(result => { console.log(result);});
  }

}
