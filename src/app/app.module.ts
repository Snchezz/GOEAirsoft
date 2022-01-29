import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// RouterModule para el active nav, añadimos despues routerLinkActive="active"
// Y en el css .active {lo que sea}
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VentaComponent } from './venta/venta.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CookiesComponent } from './cookies/cookies.component';
import { AvisoslegalesComponent } from './avisoslegales/avisoslegales.component';
import { InfowebComponent } from './infoweb/infoweb.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NuevalocalizacionComponent } from './nuevalocalizacion/nuevalocalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    ContactoComponent,
    VentaComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    NoticiasComponent,
    CookiesComponent,
    AvisoslegalesComponent,
    InfowebComponent,
    LoginComponent,
    RegistrerComponent,
    CarritoComponent,
    NuevalocalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
