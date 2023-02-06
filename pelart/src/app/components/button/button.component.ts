import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() : void {
  }

  onClick(): void {
    this.btnClick.emit();
  }

}
