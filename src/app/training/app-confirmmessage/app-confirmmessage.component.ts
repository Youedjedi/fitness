import { Component } from '@angular/core';

@Component({
  selector: 'app-app-confirmmessage',
  template: `<h1 mat-dialog-title>Hi </h1>
  <div mat-dialog-content>
    <p> test of content</p>

  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Thanks</button>
    <button mat-button [mat-dialog-close]="false">No Thanks</button>
  </div>`,
  styleUrls: ['./app-confirmmessage.component.css']
})
export class AppConfirmmessageComponent {

}
