import { Component } from '@angular/core';
import { tags } from '../../../shared/utils/tags';

@Component({
    selector: 'portafolio-knowledge',
    templateUrl: './knowledge.component.html',
    styles: ``
})
export class KnowledgeComponent {
    knowledge = tags;
}
