import { Component } from '@angular/core';
import { HeroComponent }            from '@sections/hero/hero.component';
import { MarqueeComponent }         from '@sections/marquee/marquee.component';
import { ServicesSectionComponent } from '@sections/services-section/services-section.component';
import { AboutComponent }           from '@sections/about/about.component';
import { ProcessComponent }         from '@sections/process/process.component';
import { IndustriesComponent }      from '@sections/industries/industries.component';
import { CtaComponent }             from '@sections/cta/cta.component';

@Component({
  selector: 'mrf-home',
  standalone: true,
  imports: [
    HeroComponent,
    MarqueeComponent,
    ServicesSectionComponent,
    AboutComponent,
    ProcessComponent,
    IndustriesComponent,
    CtaComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
