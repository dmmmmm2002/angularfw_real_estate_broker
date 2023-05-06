import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() estatesObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();


  chosenImage: any;

  constructor() {}

  ngOnChanges(): void {
    if (this.estatesObjectInput) {
      this.chosenImage = this.estatesObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
    
  }

  reload() {
    this, this.imageObjectEmitter.emit(this.chosenImage);
  }

}
