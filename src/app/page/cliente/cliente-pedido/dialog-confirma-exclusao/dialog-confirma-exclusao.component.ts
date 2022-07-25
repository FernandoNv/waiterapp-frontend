import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirma-exclusao',
  templateUrl: './dialog-confirma-exclusao.component.html',
  styleUrls: ['./dialog-confirma-exclusao.component.scss']
})
export class DialogConfirmaExclusaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogConfirmaExclusaoComponent>) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close(true);
  }

}
