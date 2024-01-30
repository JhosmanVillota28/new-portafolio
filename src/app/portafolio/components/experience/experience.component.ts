import { Component } from '@angular/core';

@Component({
    selector: 'portafolio-experience',
    templateUrl: './experience.component.html',
    styles: ``
})
export class ExperienceComponent {
    experienceWork = [
        {
            date: 'Abril 2021 - Actualmente...',
            title: 'Desarrollador Fullstack - Marpico S.A.S',
            description: 'Desarrollo de aplicaciones web y móviles, manejo de bases de datos en MySql y MongoDB, desarrollo de servicios y microservicios utilizando NodeJS, JWT, Express, NestJS y desarrollo de interfaces web utilizando Angular, Ionic y Tailwindcss.',
        },
        {
            date: 'Octubre 2020 - Abril 2021',
            title: 'Desarrollador Fullstack - Grupo Novus LTDA',
            description: 'Desarrollo de aplicaciones web, administración de bases de datos en MySql y MongoDB, desarrollo de servicios api REST con diferentes lenguajes de programación, implementacion de sockets, desarrollo de aplicaciones real-time con Laravel y Vue, manejo de la API de Google Maps.',
        },
        {
            date: 'Diciembre 2018 - Octubre 2020',
            title: 'Desarrollador Web - Webmaster',
            description: 'Administrador de servidores web y hosting en la nube, desarrollo de aplicaciones web y de escritorio, analista de SEO, publicidad y administrador de bases de datos en Mysql y MongoDB, desarrollo de APIs utilizando Laravel y PHP, desarrollo de interfaces utilizando Angular.',
        },
    ]
}
