import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { MobileUrlSerializer } from 'we7-router';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    LayoutModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {
        provide: UrlSerializer,
        useClass: MobileUrlSerializer
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
