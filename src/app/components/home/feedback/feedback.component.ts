import { Component, Input } from '@angular/core';
import { feedback } from '../../../model/feedback';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input({ required: true }) feedbacks: feedback = {} as feedback;
}
