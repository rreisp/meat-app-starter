import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  message: string = 'Hello there!';

  constructor() { }

  ngOnInit() {
  }

}
