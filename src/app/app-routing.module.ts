import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RagnarokComponent } from './components/ragnarok/ragnarok.component';

const routes: Routes = [
  { path: 'ragnarok', component: RagnarokComponent },
  { path: 'home',  redirectTo: '/' },
  { path: 'tormenta', loadChildren: 'app/module/tormenta/tormenta.module#TormentaModule'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}