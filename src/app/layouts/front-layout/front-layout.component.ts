import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.scss']
})
export class FrontLayoutComponent implements OnInit, AfterViewInit {
  showMenu1 = false;
  showMenu2 = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // if (val.url.includes('/')) {
        if (val.url == '/') {
          this.showMenu1 = true;
          this.showMenu2 = false;
        } else {
          this.showMenu1 = false;
          this.showMenu2 = true;
        }
      }
    });
  }
  path: string | undefined
  ngOnInit() {
    // @ts-ignore
    this.path = this.route.snapshot['_routerState']['url']
  }

  ngAfterViewInit(): void {
  }


}
