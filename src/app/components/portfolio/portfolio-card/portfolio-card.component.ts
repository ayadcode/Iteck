import { Component, Input } from '@angular/core';
import { PCard } from '../../../model/PCard';
@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
})
export class PortfolioCardComponent {
  @Input({ required: true }) PCards: PCard = {} as PCard;
}
