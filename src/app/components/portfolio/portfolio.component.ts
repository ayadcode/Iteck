import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, IgxDatePickerModule, IgxTimePickerModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public date = new Date();
}
