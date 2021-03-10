import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { BodyService } from './components/features/body/body.component.service';
import { UserService } from './components/features/users/user.component.service';
import { UsersServices } from './components/features/user/user.component.service';
import { CacheService } from './cache.service';

// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/features/login/login.component';
import { BodyComponent } from './components/features/body/body.component';
import { UsersComponent } from './components/features/users/users.component';

import { FilterPipe } from './components/features/body/body.pipe';

import { RouterModule, Router, Routes } from '@angular/router';
import { UserComponent } from './components/features/user/user.component';
import { ReplicationComponent } from './components/features/replication/replication.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavBarComponent, 
    FooterComponent,
    LoginComponent,
    BodyComponent,
    UsersComponent,
    UserComponent,
    ReplicationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule
  ],
  providers: [
    BodyService,
    UserService,
    UsersServices,
    CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
