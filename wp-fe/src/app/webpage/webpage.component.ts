import { Component, OnInit } from '@angular/core';
import { WebPage, Section } from './shared/webpage.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { WebpageService } from './shared/webpage.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html'
})
export class WebpageComponent implements OnInit {
  
  webPage = new WebPage();

  //#region ctor
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private webpageService: WebpageService) {
    // https://stackoverflow.com/questions/49407730/angular-2-constructor-and-ngoninit-not-getting-called-if-route-is-manipulated-u
    this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      this.ngOnInit();
    });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {

      const virtualPath = this.activatedRoute.snapshot.params['id'];
      this.getWebPage(virtualPath);
    }
  }
  //#endregion

  getWebPage(virtualPath: string) {
    this.webpageService.getPageByVirtualPath(virtualPath).subscribe(x => {
      console.log(x);
      this.webPage = x;
    })
  }

  isHtmlSection(t: Section) {
    return t.controller == 'HtmlContent';
  }
}
