import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    AddImageComponent,
    HomeComponent,
    ButtonComponent,
    PostTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
