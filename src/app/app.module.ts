import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SinglePlayerPage } from '../pages/single-player/single-player';
import { MultiplayerPage } from '../pages/multiplayer/multiplayer';
import { GameEndPage } from '../pages/game-end/game-end';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiplayerServiceProvider } from '../providers/multiplayer-service/multiplayer-service';
import { SingleplayerServiceProvider } from '../providers/singleplayer-service/singleplayer-service';
import { UserServiceProvider } from '../providers/user-service/user-service';

//initialize Firebase
 /*var config = {
    apiKey: "AIzaSyAA-g_7T7PD7y2AkHYU9pbyqXY8XPMFy5c",
    authDomain: "rockpaperscissors-dd140.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-dd140.firebaseio.com",
    projectId: "rockpaperscissors-dd140",
    storageBucket: "rockpaperscissors-dd140.appspot.com",
    messagingSenderId: "461446777003"
  };*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SinglePlayerPage,
    MultiplayerPage,
    GameEndPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
     SinglePlayerPage,
    MultiplayerPage,
    GameEndPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MultiplayerServiceProvider,
    SingleplayerServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
