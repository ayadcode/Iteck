import { Component, Input } from '@angular/core';
import { ACard } from '../../../model/ACard';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss',
})
export class AboutCardComponent {
  @Input({ required: true }) ACards: ACard = {} as ACard;
}
