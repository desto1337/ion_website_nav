import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Über uns',
      url: '/menu/infos'
    },
    {
      title: 'Unsere Skills',
      url: '/menu/skills'
    },
    {
      title: 'Unser Team',
      url: '/menu/character'
    },
    {
      title: 'Unsere Projekte',
      url: '/menu/projects'
    },
    {
      title: 'Unser Werdegang',
      url: '/menu/career'
    },
    {
      title: 'Kontakt & Mehr',
      url: '/menu/contacttabs'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url) {
        this.selectedPath = event.url;
      }
    });

   }

  ngOnInit() {
  }

}
