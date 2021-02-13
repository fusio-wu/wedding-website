import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  message = "For better experience, please play the music";
  action = "dismiss";

  constructor(private _snackBar: MatSnackBar) {
    this._snackBar.open(this.message, this.action, {
      verticalPosition: "top",
    });   
  }

  ngOnInit(): void {
  }

}
