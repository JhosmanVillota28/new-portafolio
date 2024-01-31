import { Component } from '@angular/core';
import { tags } from '../../../shared/utils/tags';

@Component({
    selector: 'portafolio-projects',
    templateUrl: './projects.component.html',
    styles: ``
})
export class ProjectsComponent {
    tags = tags;

    projects = [
        {
            title: "Bulldog Store",
            subtitle: "En funcionamiento",
            description:
                "Tienda virtual para la comercialización de los productos de la marca Bulldog, este e-commerce cuenta con +200 ventas al mes. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://bulldogstore.com.co/",
            image: "assets/imagenes/projects/bulldogstore.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Evaluaciones de desempeño",
            subtitle: "En funcionamiento",
            description:
                "Plataforma web creada para llevar a cabo las evaluaciones de desempeño internas en la institución educativa Gimnasio San Angelo. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP, Angular y Bootstrap.",
            link: "https://desempeno.gimnasiosanangelo.edu.co/#/home",
            image: "assets/imagenes/projects/desempeno.png",
            tags: [this.tags.Angular, this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Página Web Marpico Vinos y Licores",
            subtitle: "En funcionamiento",
            description:
                "Página web utilizada para presentar los diferentes tipos de productos que ofrece la linea Marpico Vinos, asi mismo es utilizada para presentar el catalogo completo de los mismos. Creada de inicio a fin utilizando las tecnologias de Angular, Node.js, Express, JWT y Bootstrap.",
            link: "https://marpicovinos.com/",
            image: "assets/imagenes/projects/vinos.png",
            tags: [this.tags.Angular, this.tags.Node, this.tags.Express, this.tags.JWT, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Página Web para administrar Marpico Vinos y Licores",
            subtitle: "En funcionamiento",
            description:
                "Página web utilizada para administrar la información y contenido visible en la página Marpico Vinos. Creada de inicio a fin utilizando las tecnologias de Angular, Node.js, Express, JWT y Bootstrap.",
            link: "http://consola.marpicovinos.com/#/Login",
            image: "assets/imagenes/projects/consola_marpico_vinos.png",
            tags: [this.tags.Angular, this.tags.Node, this.tags.Express, this.tags.JWT, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Página Web Pinturas Bulldog",
            subtitle: "En funcionamiento",
            description:
                "Página web creada para presentar informacion sobre los productos de la marca Bulldog, tambien es utilizada para exponer trabajos realizados con los productos de la marca, Se expone el Staff y los valores de la marca. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://pinturas.ferrebulldog.com/",
            image: "assets/imagenes/projects/pinturas.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Página Web FerreBulldog",
            subtitle: "En funcionamiento",
            description:
                "Página web creada para presentar informacion sobre los productos de la marca FerreBulldog, tambien es utilizada para exponer el catálogo completo de esta marca. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://ferrebulldog.com/",
            image: "assets/imagenes/projects/ferrebulldog.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        // De aqui para abajo falta ajustar los textos
        {
            title: "Plataforma web PQRs",
            subtitle: "En funcionamiento",
            description:
                "Plataforma web creada para recibir los PQRs de los colaboradores o los padres de familia hacia la institución educativa Gimnasio San Angelo. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://pqr.gimnasiosanangelo.edu.co/inicio",
            image: "assets/imagenes/projects/pqrs.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Plataforma web elección personero",
            subtitle: "En funcionamiento",
            description:
                "Plataforma web creada para llevar a cabo las votaciones y elecciones de personero en la intitución educativa Gimnasio San Angelo. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://personero.gimnasiosanangelo.edu.co/login",
            image: "assets/imagenes/projects/personero.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Plataforma web ingreso a comedor",
            subtitle: "En funcionamiento",
            description:
                "Plataforma web creada para registrar y permitir el ingreso de los estudiantes que cuenten con el servicio al comedor en la institución educativa Gimnasio San Angelo. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP y Bootstrap.",
            link: "https://almuerzo.gimnasiosanangelo.edu.co/login",
            image: "assets/imagenes/projects/almuerzos.png",
            tags: [this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
        {
            title: "Shortener - Acortador de URLs",
            subtitle: "En funcionamiento",
            description:
                "Plataforma web creada para recortar y redireccionar URLs mediante URL o codigo QR. Creada de inicio a fin utilizando las tecnologias de Laravel, PHP, Angular y Bootstrap.",
            link: "https://shortener-urls-hx1u.vercel.app/",
            image: "assets/imagenes/projects/shortener.png",
            tags: [this.tags.Angular, this.tags.Laravel, this.tags.Php, this.tags.MySql, this.tags.Bootstrap],
        },
    ]
}
