import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';


const routes: Routes = [
    { 
        path: '', 
        component: PeoplesComponent,
    },
    { 
        path: 'people/:id', 
        component: PeopleDetailsComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [
    PeoplesComponent,
];