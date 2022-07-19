import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBebida, IPrato } from '../item';

@Component({
  selector: 'app-item-detalhe',
  templateUrl: './item-detalhe.component.html',
  styleUrls: ['./item-detalhe.component.scss']
})
export class ItemDetalheComponent implements OnInit {
  isPrato: boolean = false;
  prato: IPrato | undefined;
  bebida: IBebida | undefined;

  constructor(
    public dialogRef: MatDialogRef<ItemDetalheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: (IBebida | IPrato),
  ) {
    if(('quantidade' in data)){
      this.bebida = data as IBebida;
    }else{
      this.prato = data as IPrato;
    }
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close({ item: this.data, quantidade: 1 });
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
