import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CaseStudyComponent } from './components/portfolio/case-study/case-study.component';
export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: 'about', title: 'About Us', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'case-study', title: 'case-study', component: CaseStudyComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
