import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { VentaComponent } from './venta/venta.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InfoComponent } from './info/info.component';
import { CookiesComponent } from './cookies/cookies.component';
import { AvisoslegalesComponent } from './avisoslegales/avisoslegales.component';
import { InfowebComponent } from './infoweb/infoweb.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { NuevalocalizacionComponent } from './nuevalocalizacion/nuevalocalizacion.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'shop', component: VentaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'faqs', component: InfoComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'avisos-legales', component: AvisoslegalesComponent },
  { path: 'informacion-web', component: InfowebComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'registro', component: RegistrerComponent },
  { path: 'noticias/nueva-localizacion-sevilla', component: NuevalocalizacionComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    // Para que te lleve siempre al top de la pagina
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
