import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { second-component } from './second-component/second-component.component';
import { third-component } from './third-component/third-component.component';
import { fourth-component } from './fourth-component/fourth-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'second', component: second-component },
  { path: 'third', component: third-component },
  { path: 'fourth', component: fourth-component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
