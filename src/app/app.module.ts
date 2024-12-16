import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';// runing app in browser
import { AppRoutingModule } from './app-routing.module';// one page to another page
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { AuthComponent } from './page/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';// Allow and manage your form in a reactive way
import { ProfileComponent } from './page/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';//help for making http request ex:-fecting data from api
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';//For GraphQL API integration
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';//store qa fecthed data // allow to connect apicallof graphql
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';//Protects routes that require user authentication.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // support for animatation


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CartComponent,
    FormComponent,
    AuthComponent,
    ProfileComponent,
    ProductPageComponent,
    CheckoutComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,// connect client to Api call
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),// stored a fetched data
          link: httpLink.create({ uri: 'https://api.escuelajs.co/graphql' }),
        };
      },
      deps: [HttpLink],
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]// it frist loaded and get started, Maincomponent
  
})
export class AppModule { }
