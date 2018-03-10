import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
    isOpen: boolean = false;
    constructor() { }

    toggleOpened(): void {
        this.isOpen = !this.isOpen;
    }
}