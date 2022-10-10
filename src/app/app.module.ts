import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import vi from '@angular/common/locales/vi';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CoreModule } from '@core/core.module';
import {
  LoadingInterceptor,
} from '@core/interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '@shared/shared.module';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

registerLocaleData(vi);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: true,
    }),
    NgxWebstorageModule.forRoot({ prefix: '', separator: '' }),
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzFormModule,
    NzMenuModule,
    NzSpinModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,"cloud"),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: NZ_ICONS, useValue: icons },
    {
      provide: NZ_CONFIG,
      useValue: {
        notification: {
          nzMaxStack: 5,
          nzDuration: 3000,
          nzPauseOnHover: false,
          nzPlacement: 'topRight',
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}
