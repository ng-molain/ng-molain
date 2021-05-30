import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'demo/components', pathMatch: 'full'},
  {
    path: 'demo/components',
    loadChildren: () => import('./components-demo/components-demo.module').then(m => m.ComponentsDemoModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
