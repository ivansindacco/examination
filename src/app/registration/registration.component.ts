import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data: string;
  constructor() { }

  ngOnInit() {
  }

}

export class RegistrationComponent implements OnInit {


  ngOnInit() {
  }
  user: User = new User();
  constructor(
  public dialogRef: MatDialogRef<RegistrationComponent>,
  // MAT_DIALOG_DATA public data: User
  ) {}
  
  onNoClick(): void {
  this.dialogRef.close();
  }
  }