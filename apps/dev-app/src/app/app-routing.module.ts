import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'demo/components', pathMatch: 'full'},
  {
    path: 'demo/components',
    loadChildren: () => import('./components-demo/components-demo.module').then(m => m.ComponentsDemoModule)
  },
  {
    path: 'demo/forms',
    loadChildren: () => import('./forms-demo/forms-demo.module').then(m => m.FormsDemoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
