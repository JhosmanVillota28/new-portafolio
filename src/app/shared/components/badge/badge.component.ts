import { Component, Input, input } from '@angular/core';

@Component({
    selector: 'shared-badge',
    templateUrl: './badge.component.html',
})
export class BadgeComponent {
    @Input()
    svg?: string;

    @Input()
    icono?: string;

    @Input()
    texto: string = "";

    @Input()
    url?: string;

    redireccionar(url: string) {
        window.open(url, '_blank');
    }
}
