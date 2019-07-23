import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'infos',
        loadChildren: '../infos/infos.module#InfosPageModule'
      },
      {
        path: 'skills',
        loadChildren: '../skills/skills.module#SkillsPageModule'
      },
      {
        path: 'character',
        loadChildren: '../character/character.module#CharacterPageModule'
      },
      {
        path: 'projects',
        loadChildren: '../projects/projects.module#ProjectsPageModule'
      },
      {
        path: 'career',
        loadChildren: '../career/career.module#CareerPageModule'
      },
      {
        path: 'contacttabs',
        loadChildren: '../contacttabs/contacttabs.module#ContacttabsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
