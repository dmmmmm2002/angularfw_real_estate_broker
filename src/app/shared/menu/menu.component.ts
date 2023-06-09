import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() actualPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  menuSwitch(pageValue: string) {
    this.selectedPage.emit(this.actualPage);
  }

  close() {
    this.onCloseSidenav.emit(true);
  }

}
