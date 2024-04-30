import { Component } from '@angular/core';
import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [FormsModule, IgxDatePickerModule, IgxTimePickerModule],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
})
export class CaseStudyComponent {
  public date = new Date();
}
