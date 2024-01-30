import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    // {
    //     path: '#inicio',
    //     component: DescriptionComponent,
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortafolioRoutingModule { }
