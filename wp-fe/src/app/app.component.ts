import { Component } from '@angular/core';
import { WebPage } from './webpage/shared/webpage.model';
import { WebpageService } from './webpage/shared/webpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wp-fe';

  webpages: Array<WebPage> = [];
  constructor(private webpageService: WebpageService) { }

  ngOnInit() {
    this.getNavigations();
  }

  getNavigations() {
    this.webpageService.getAll().subscribe(
      res => this.webpages = res,
      // err => {
      //   this.errorMessage = err.error
      // }
    );
  }
}
