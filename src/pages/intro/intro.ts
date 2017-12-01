import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public goToHome(){
    
        this.navCtrl.push(HomePage);
      }

  public goToNext(){

    this.slides.slideNext(500);
    
  }    

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
