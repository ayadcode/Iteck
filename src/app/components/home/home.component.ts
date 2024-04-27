import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';
import { ICard } from '../../model/ICard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    FormsModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public date = new Date();

  readonly cards: Array<ICard> = [
    {
      id: 1,
      title: 'IT Consultation',
      imgUrl: 'assets/images/home/services/Consultation.png',
      description:
        'Trust our tap minds to eliminate workflow pain point implement new tech & app',
    },
    {
      id: 2,
      title: 'Web Development',
      imgUrl: 'assets/images/home/services/web-development.png',
      description:
        'Having website is first step to running online business. userfriendly responsive website with right flow',
    },
    {
      id: 3,
      title: 'mobile development',
      imgUrl: 'assets/images/home/services/mobile-development.png',
      description:
        'Having website is first step to running online business. userfriendly responsive website with right flow',
    },
    {
      id: 4,
      title: 'Desktop Development',
      imgUrl: 'assets/images/home/services/desktop.png',
      description:
        'Having website is first step to running online business. userfriendly responsive website with right flow',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      imgUrl: 'assets/images/home/services/web-design.png',
      description:
        'Wireframing your application model is set of images that will show schematic or blueprint of your website or app',
    },
    {
      id: 6,
      title: 'Ecommerce Web',
      imgUrl: 'assets/images/home/services/e-commerce.png',
      description:
        'With an ecommerce solution in website customers can view your storefront through their PC or mobile.',
    },
  ];
}
