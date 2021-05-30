import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Route1 } from './route1/route1.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: Dashboard },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'route1', component: Route1 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
