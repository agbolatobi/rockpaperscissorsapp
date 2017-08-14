import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameEndPage } from '../../pages/game-end/game-end';
/**
 * Generated class for the SinglePlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-single-player',
  templateUrl: 'single-player.html',
})
export class SinglePlayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
private gameStart: boolean = true;
private computerMove;
private userClass="rockyellow play-center";
private computerClass="rockyellow play-center";
private computerScore=0;
private userScore=0;
startGame(){
  this.gameStart=false;
  this.userClass="rockyellow play-center";
  this.computerClass="rockyellow play-center";
  this.computerScore=0;
  this.userScore=0;
}
endGame(){
  this.gameStart=true;
}
gameAction(value : any){
 var randomnumber=Math.floor(Math.random() * 3) + 1 ;
 if(randomnumber===1){
this.computerMove="rock";

 }else if(randomnumber===2){
this.computerMove="paper";

 }else{
this.computerMove="scissors";
 }
if(value==this.computerMove){
   if(value==="rock"){
this.userClass="rockyellow play-center"
this.computerClass="rockyellow play-center"
   }else if (value==="paper"){
this.userClass="paperyellow play-center"
this.computerClass="paperyellow play-center"
   }else{
this.userClass="scissorsyellow play-center"
this.computerClass="scissorsyellow play-center"
   } 
 }
 if(value==="rock"&&this.computerMove==="scissors"){
this.userClass="rockGreen play-center"
this.computerClass="scissorsRed play-center"
this.userScore=this.userScore + 1;
this.gameEnd(this.userScore, this.computerScore)
   }
    if(value==="scissors"&&this.computerMove==="paper"){
this.userClass="scissorsGreen play-center"
this.computerClass="paperRed play-center"
this.userScore=this.userScore + 1;
this.gameEnd(this.userScore, this.computerScore)
   }
    if(value==="paper"&&this.computerMove==="rock"){
this.userClass="paperGreen play-center"
this.computerClass="rockRed play-center"
this.userScore=this.userScore + 1;
this.gameEnd(this.userScore, this.computerScore)
   }
    if(value==="scissors"&&this.computerMove==="rock"){
this.userClass="scissorsRed play-center"
this.computerClass="rockGreen play-center"
this.computerScore=this.computerScore+1;
this.gameEnd(this.userScore, this.computerScore)
   }
    if(value==="paper"&&this.computerMove==="scissors"){
this.userClass="paperRed play-center"
this.computerClass="scissorsGreen play-center"
this.computerScore=this.computerScore+1;
this.gameEnd(this.userScore, this.computerScore)
   }
    if(value==="rock"&&this.computerMove==="paper"){
this.userClass="rockRed play-center"
this.computerClass="paperGreen play-center"
this.computerScore=this.computerScore+1;
this.gameEnd(this.userScore, this.computerScore)
   }
}
clickRock(){
var value="rock";
this.gameAction(value);
}
clickPaper(){
  var value="paper";
this.gameAction(value);
}
clickScissors(){
  var value="scissors";
this.gameAction(value);
}
gameEnd( userScore : number,computerScore : number){
  
if(computerScore >= 3 || userScore >= 3){
  if(computerScore===3){
    var gameMessage="You Were Defeated By The Computer";
  }else{
    var gameMessage="You Got Lucky But Lighting Does Not strike On The Same Place Twice";
  }
  this.endGame();
this.navCtrl.push(GameEndPage,{
  compScore:computerScore,
  userScore:userScore,
  gameMessage: gameMessage
});
}
}
ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePlayerPage');
  }
}