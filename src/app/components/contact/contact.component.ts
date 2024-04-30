import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, IgxDatePickerModule, IgxTimePickerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public date = new Date();
}
