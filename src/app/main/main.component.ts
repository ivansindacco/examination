import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  user: User = new User();
  ngOnInit() {
  }
  openDialog(): void {
  
  const dialogRef = this.dialog.open(registrationComponent, {
  width: '380px',
  height: '532px',
  data: this.user
  });
  
  dialogRef.afterClosed().subscribe(result => {
  this.user = result;
  console.log(this.user);
  
  });
  }
  }