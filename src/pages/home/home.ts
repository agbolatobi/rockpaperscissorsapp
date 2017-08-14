import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SinglePlayerPage} from '../../pages/single-player/single-player';
import {MultiplayerPage} from '../../pages/multiplayer/multiplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToSingleplayer(){
this.navCtrl.push(SinglePlayerPage);
}
goToMultiplayer(){
this.navCtrl.push(MultiplayerPage);
}
}
