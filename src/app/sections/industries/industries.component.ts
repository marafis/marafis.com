import { Component, inject } from '@angular/core';
import { ContentService }    from '@core/services/content.service';
import { RevealDirective }   from '@core/directives/reveal.directive';

@Component({
  selector: 'mrf-industries',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss'],
})
export class IndustriesComponent {
  protected readonly content = inject(ContentService);
}
