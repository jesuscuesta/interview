import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'menu',  redirectTo: '/' },
  { path: 'tormenta', loadChildren: 'app/module/tormenta/tormenta.module#TormentaModule'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class TormentaRoutingModule {}