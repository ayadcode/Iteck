import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PCard } from '../../model/PCard';
import { IgxDatePickerModule, IgxTimePickerModule } from 'igniteui-angular';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    FormsModule,
    PortfolioCardComponent,
    IgxDatePickerModule,
    IgxTimePickerModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public date = new Date();

  readonly PCards: Array<PCard> = [
    {
      id: 1,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
    {
      id: 2,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
    {
      id: 3,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
    {
      id: 4,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
    {
      id: 5,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
    {
      id: 6,
      title: 'Big chafe',
      subtitle: 'Project overview',
      description:
        'The project is an educational website and application that aims to be specialized in offering cooking courses and how to become a professional chef and tends to you find the site easy and smooth in learning where you do not get tired of the learning period and gives you an incentive to be able to continue',
      buttons: {
        country: {
          imgUrl: 'assets/images/portfolio/flag.png',
          para: 'Turkish',
        },
        second: 'Web',
        third: 'Mobile',
      },
      imgUrl: 'assets/images/portfolio/case-study.png',
    },
  ];
}
