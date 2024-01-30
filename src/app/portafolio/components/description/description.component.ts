import { Component } from '@angular/core';

@Component({
    selector: 'portafolio-description',
    templateUrl: './description.component.html',
    styles: ``
})
export class DescriptionComponent {
    birthDate = new Date('2000-11-28T05:30:00');
    socialLinks = [
        {
            icon: "bi bi-linkedin",
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/jhosman-villota/",
        },
        {
            icon: "bi bi-github",
            text: "GitHub",
            url: "https://github.com/JhosmanVillota28/",
        },
        {
            icon: "bi bi-gitlab",
            text: "GitLab",
            url: "https://gitlab.com/Jhostom",
        },
        {
            icon: "bi bi-envelope-at-fill",
            text: "jhosman_villota@hotmail.com",
            url: "mailto:jhosman_villota@hotmail.com",
        },
    ];

    get calculateAge(): Number {
        let date = new Date();
        var edad = date.getFullYear() - this.birthDate.getFullYear();
        var mes = date.getMonth() - this.birthDate.getMonth();

        if (mes < 0 || (mes === 0 && date.getDate() < this.birthDate.getDate())) {
            edad--;
        }

        return edad;
    }

    redireccionar(): void {
        window.open(this.socialLinks[0].url, '_blank');
    }
}
