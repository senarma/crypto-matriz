import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the PerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  @ViewChild(Slides) slides: Slides;
  acerto:number=0;
  
  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

 
  
  public showNext(): void {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
  }

  public showNextCerto(): void {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
    this.acerto= this.acerto+1;
    console.log(this.acerto);
  }

  public voltarHome(){
    
        this.navCtrl.push(HomePage);
      }

  public tentarDenovo(){
        
       this.navCtrl.push(PerguntasPage);
       }

}
