import {Component, Input} from '@angular/core';

@Component({
  selector: 'enterprise-angular-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = 'Button';
}
