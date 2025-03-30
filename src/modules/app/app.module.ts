import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routing/app-routing.module';
import { RootComponent } from './components/root/root.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootComponent,
    HelloWorldComponent,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
