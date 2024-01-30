import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'portafolio-home-page',
    templateUrl: './home-page.component.html',
    styles: ``
})
export class HomePageComponent {
    constructor(private router: Router) { }
}
