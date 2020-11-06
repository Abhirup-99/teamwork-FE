import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { TitlebarComponent } from './navigation/titlebar/titlebar.component';
import { SharedModule } from './shared/shared.module';
import { SidelinksComponent } from './navigation/sidebar/sidelinks/sidelinks.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TitlebarComponent,
    SidelinksComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
