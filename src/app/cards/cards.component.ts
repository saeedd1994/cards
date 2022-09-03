import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() content:string='';

  constructor() {
  }


}
