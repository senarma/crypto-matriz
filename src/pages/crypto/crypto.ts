import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CryptoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crypto',
  templateUrl: 'crypto.html',
})
export class CryptoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CryptoPage');
  }

  public goHome(){
    
        this.navCtrl.push(HomePage);
      }
      
  public  showCifrador() {
    let alert = this.alertCtrl.create({
      title: 'CIFRADOR',
      subTitle: ' A-1 B-2 C-3 D-4 E-5 F-6 G-7 H-8 I-9 J-10 K-11 L-12 M-13 N-14 O-15 P-16 Q-17 R-18 S-19 T-20 U-21 V-22 W-23 X-24 Y-25 Z-26 <br/> Numeros maior que 26 são espaço ',
      buttons: ['OK']
    });
    alert.present();
  }
}
