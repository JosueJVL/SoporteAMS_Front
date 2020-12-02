import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/features/users/users.component';
import { BodyComponent } from './components/features/body/body.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'body', component: BodyComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'body' }
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
