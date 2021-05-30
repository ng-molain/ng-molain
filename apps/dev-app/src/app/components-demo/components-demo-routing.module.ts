import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewFrameworkProductComponent} from "@ng-molain/components";

const routes: Routes = [
  {
    path: '', component: ViewFrameworkProductComponent, children: [
      {
        path: 'orgUnit',
        loadChildren: () => import('./org-unit-demo/org-unit-demo.module').then(m => m.OrgUnitDemoModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsDemoRoutingModule {
}
