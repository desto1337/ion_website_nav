import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContacttabsPage } from './contacttabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ContacttabsPage,
    children: [
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      },
      {
        path: 'links',
        loadChildren: '../links/links.module#LinksPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo : 'tabs/contact',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContacttabsPage]
})
export class ContacttabsPageModule {}
