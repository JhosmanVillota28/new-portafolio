import { Component } from '@angular/core';

@Component({
    selector: 'portafolio-education',
    templateUrl: './education.component.html',
    styles: ``
})
export class EducationComponent {
    educationHistory = [
        {
            date: 'Actualmente...',
            title: 'Ingeniería de sistemas, último semestre',
            institution: 'Corporación Unificada Nacional de Educación Superior CUN',
            city: 'Bogotá',
        },
        {
            date: '2018',
            title: 'Tecnología en análisis y desarrollo de sistemas de información (ADSI)',
            institution: 'SENA',
            city: 'Bogotá',
        },
        {
            date: '2017',
            title: 'Técnico en desarrollo de aplicaciones informáticas',
            institution: 'SENA',
            city: 'Bogotá',
        },
        {
            date: '2017',
            title: 'Bachiller académico con énfasis en programación orientada a objetos',
            institution: 'Centro educativo fe y alegria San Luis Gonzaga',
            city: 'Bogotá',
        },
    ]
}
