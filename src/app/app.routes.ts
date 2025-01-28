import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Topic1Component } from './topics/custom_directives/topic1.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customDirective', component: Topic1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
