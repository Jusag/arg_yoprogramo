import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosARGComponent } from './components/logos-arg/logos-arg.component';

import { BannertopComponent } from './components/bannertop/bannertop.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperiencialaboralComponent } from './components/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HardysoftComponent } from './components/hardysoft/hardysoft.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosARGComponent,
    BannertopComponent,
    AcercaDeComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HardysoftComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
