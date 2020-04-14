import { BrowserModule } from '@angular/platform-browser';
import {NgModule, enableProdMode, APP_INITIALIZER} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from './login/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JsonAppConfigService} from '../config/json-app-config.service';
import {AppConfig} from '../config/app-config';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
