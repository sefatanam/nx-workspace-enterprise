import {Component, Input} from '@angular/core';
import {Member} from "@enterprise-angular/api-interfaces";

@Component({
  selector: 'enterprise-angular-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() member!: Member;
}
