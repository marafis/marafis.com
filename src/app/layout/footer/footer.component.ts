import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ContentService} from '@core/services/content.service';

@Component({
  selector: 'mrf-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  protected readonly content = inject(ContentService);
  readonly year = new Date().getFullYear();
}
