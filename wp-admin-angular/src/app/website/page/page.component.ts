import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WebPageService } from '../../_services';
import { WebPage } from './shared/webpage.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  pageName: string;
  webPage = new WebPage();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private webPageService: WebPageService) {
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

  getWebPage(virtualPath: string){
    this.webPageService.getPageByVirtualPath(virtualPath).subscribe(x => {
      this.webPage = x;
      this.pageName = x.virtualPath;
    })
  }
}
