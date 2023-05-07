import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  page = '';

  routes: Array<string> = [];

  //letrehozza a router-t
  constructor (private router: Router){

  }

  ngOnInit (){
    this.routes = this.router.config.map(conf => conf.path) as string[];
    // rxjs - reactive
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
        const actualPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
        if (this.routes.includes(actualPage)) {
          this.page = actualPage;
        }
    });
  }

  changePage(selectedPage: string){
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event:any, sidenav: MatSidenav) {
    if (event === true){
      sidenav.close();
    }
  }
}
