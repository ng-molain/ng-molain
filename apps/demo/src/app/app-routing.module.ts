import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '@ng-molain/demo/layout';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
      { path: 'style', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
      { path: 'pro', loadChildren: () => import('./pro/pro.module').then(m => m.ProModule) },
      // { path: '', loadChildren: () => import('.').then(m => m) },

      // exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
    ]
  },

  // exception
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },

  // passport
  { path: '', loadChildren: () => import('./account/passport/passport.module').then(m => m.PassportModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },

  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}