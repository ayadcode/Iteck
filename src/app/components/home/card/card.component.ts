import { Component, Input } from '@angular/core';
import { ICard } from '../../../model/ICard';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) cards: ICard = {} as ICard;
}
