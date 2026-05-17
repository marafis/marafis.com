import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass }  from '@angular/common';
import { RouterLink }          from '@angular/router';
import { ScrollService }        from '@core/services/scroll.service';
import { ContentService }      from '@core/services/content.service';

@Component({
  selector: 'mrf-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly scroll   = inject(ScrollService);
  protected readonly content  = inject(ContentService);
}
