import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/features/users/users.component';
import { BodyComponent } from './components/features/body/body.component';
import { UserComponent } from './components/features/user/user.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'body', component: BodyComponent},
  { path: 'user', component: UserComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'body' }
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
