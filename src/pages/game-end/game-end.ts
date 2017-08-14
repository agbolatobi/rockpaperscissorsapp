import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SinglePlayerPage} from '../../pages/single-player/single-player';
/**
 * Generated class for the GameEndPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-end',
  templateUrl: 'game-end.html',
})
export class GameEndPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 
  private computerScore=this.navParams.get('compScore');
  private userScore=this.navParams.get('userScore');
  private gameMessage=this.navParams.get('gameMessage');


  ionViewDidLoad() {
    console.log('ionViewDidLoad GameEndPage');
  }
goToSingleplayer(){
this.navCtrl.push(SinglePlayerPage);
}

}
