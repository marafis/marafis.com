import { Component, inject } from '@angular/core';
import { ContentService }    from '@core/services/content.service';
import { RevealDirective }   from '@core/directives/reveal.directive';

@Component({
  selector: 'mrf-process',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  protected readonly content = inject(ContentService);
}
