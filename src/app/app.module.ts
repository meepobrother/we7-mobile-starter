import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { MobileUrlSerializer } from 'we7-router';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { WeuiModule } from './weui.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    WeuiModule.forRoot()
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
