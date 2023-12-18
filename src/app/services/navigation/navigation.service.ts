import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { getNavRoutes } from 'src/app/nav-routing';

export class Page {
    title: string;
    path: string;
    isChild: boolean;
    constructor(title: string,path: string, isChild?: boolean | undefined) {
        this.title = title;
        this.path = path;
        this.isChild = !!isChild;
    }
}

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private navigationItems: Routes = getNavRoutes();

    constructor() { }

    public getNavigationItems(): Routes {
        return this.navigationItems;
    }

}
