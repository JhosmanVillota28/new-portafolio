import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        NavBarComponent,
        BadgeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavBarComponent,
        BadgeComponent,
        FooterComponent
    ]
})
export class SharedModule { }
