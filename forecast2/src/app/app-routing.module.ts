import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DallasComponent} from './dallas/dallas.component';
import{SeattleComponent} from './seattle/seattle.component';
import{BurbankComponent} from './burbank/burbank.component';
import{ChicagoComponent} from './chicago/chicago.component';
import{DcComponent} from './dc/dc.component';
import{SanjoseComponent} from './sanjose/sanjose.component';

const routes: Routes = [
 {path:'dallas', component: DallasComponent},
 {path: 'seattle', component: SeattleComponent},
 {path: 'burbank', component: BurbankComponent},
 {path: 'sanjose', component: SanjoseComponent},
 {path: 'dc', component: DcComponent},
 {path: 'chicago', component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
