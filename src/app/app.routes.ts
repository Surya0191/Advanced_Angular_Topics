import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignalsComponent } from './topics/signals/signals.component';
import { CartComponent } from './topics/signals/cart/cart.component';
import { CustomDirectivesComponent } from './topics/custom-directives/custom-directives.component';
import { ForkjoinComponent } from './topics/forkjoin/forkjoin.component';
import { DomSanitizerComponent } from './topics/dom-sanitizer/dom-sanitizer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'signals/checkout', component: CartComponent },
  { path: 'directives', component: CustomDirectivesComponent },
  { path: 'forkjoin', component: ForkjoinComponent },
  { path: 'sanitizer', component: DomSanitizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
