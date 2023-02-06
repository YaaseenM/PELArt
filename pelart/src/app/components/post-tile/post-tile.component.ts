import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNoHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent {

  @Input() imageUrl: string = '';
  @Input() id: number = 0;
  @Input() isLoved: boolean = false;
  @Output() loveClick = new EventEmitter();
  
  loved = faNoHeart;

  constructor() { }

  ngOnInit(): void {
    this.loved = this.isLoved ? faHeart : faNoHeart;
  }

  onLoveClick(): void {
    this.loveClick.emit();
  }

}
