import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecryptoPage } from './decrypto';

@NgModule({
  declarations: [
    DecryptoPage,
  ],
  imports: [
    IonicPageModule.forChild(DecryptoPage),
  ],
})
export class DecryptoPageModule {}
