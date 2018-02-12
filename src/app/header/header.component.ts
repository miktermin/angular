import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() sectionSelected = new EventEmitter<string>();

    onSelect(componentName) {
        this.sectionSelected.emit(componentName);
    }
}
