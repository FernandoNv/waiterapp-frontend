import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBebida, IPrato } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: (IBebida | IPrato) | undefined;

  @Output('app-item-clicked')
  itemClicked = new EventEmitter<(IBebida | IPrato)>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickItem(): void{
    this.itemClicked.emit(this.item);
  }

}
