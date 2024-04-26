import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public date = new Date();
}
