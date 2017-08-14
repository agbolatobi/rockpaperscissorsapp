import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiplayerPage } from './multiplayer';

@NgModule({
  declarations: [
    MultiplayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiplayerPage),
  ],
  exports: [
    MultiplayerPage
  ]
})
export class MultiplayerPageModule {}
