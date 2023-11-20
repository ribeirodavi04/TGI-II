import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Home',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Projetos',             icon:'nc-ruler-pencil',    class: '' },
    { path: '/cliente',       title: 'Clientes',              icon:'nc-single-02',      class: '' },
    { path: '/fornecedor',    title: 'Fornecedores',        icon:'nc-delivery-fast',  class: '' },
    { path: '/notifications', title: 'Usuários',     icon:'nc-circle-10',    class: '' },
    //{ path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    //{ path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    //{ path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
