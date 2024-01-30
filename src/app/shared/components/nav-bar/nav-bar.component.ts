import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'shared-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: ``
})
export class NavBarComponent implements OnInit {

    navItems = [
        {
            title: "Inicio",
            label: "inicio",
            url: "#inicio",
        },
        {
            title: "Experiencia",
            label: "experiencia",
            url: "#experiencia",
        },
        {
            title: "Proyectos",
            label: "proyectps",
            url: "#proyectos",
        },
        {
            title: "Conocimientos",
            label: "conocimientos",
            url: "#conocimientos",
        },
        {
            title: "Educación",
            label: "educación",
            url: "#educacion",
        },
        {
            title: "Sobre mí",
            label: "sobre-mi",
            url: "#sobre-mi",
        },
    ];

    urlActive: string | null = null;
    isMenuOpen = false;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.fragment.subscribe((fragment) => {
            this.urlActive = `#${fragment}`;
            console.log(`#${fragment}`);
        });

    }

    redireccionar(url: string) {
        location.href = url;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
