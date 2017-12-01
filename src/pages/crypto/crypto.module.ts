import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptoPage } from './crypto';

@NgModule({
  declarations: [
    CryptoPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptoPage),
  ],
})
export class CryptoPageModule {}
