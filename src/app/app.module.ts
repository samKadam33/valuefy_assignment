import { httpInterceptorProviders } from './http-interceptor/index';
import { VideoApiService } from './service/video-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './playlist/playlist.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [VideoApiService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
