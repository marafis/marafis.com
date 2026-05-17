import { Component, inject } from '@angular/core';
import { RouterLink }        from '@angular/router';
import { ContentService }    from '@core/services/content.service';
import { RevealDirective }   from '@core/directives/reveal.directive';

@Component({
  selector: 'mrf-cta',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  protected readonly content = inject(ContentService);
}
