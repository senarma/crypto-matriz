import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

 
  
  public showNext(): void {
    this.slides.lockSwipes(false);
    this.showFail();
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
  }

  public showNextCerto(): void {
    this.slides.lockSwipes(false);
    this.showMais();
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
    this.acerto= this.acerto+1;
    console.log(this.acerto);
  }

  public showDobro(): void {
    this.slides.lockSwipes(false);
    this.showMais();
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
    this.acerto= this.acerto+2;
    console.log(this.acerto);
  }

  public voltarHome(){
    
        this.navCtrl.push(HomePage);
      }

  public tentarDenovo(){
        
       this.navCtrl.push(PerguntasPage);
       }

    public  showCifrador() {
        let alert = this.alertCtrl.create({
          title: 'CIFRADOR',
          subTitle: ' A-1 B-2 C-3 D-4 E-5 F-6 G-7 H-8 I-9 J-10 K-11 L-12 M-13 N-14 O-15 P-16 Q-17 R-18 S-19 T-20 U-21 V-22 W-23 X-24 Y-25 Z-26 ',
          buttons: ['OK']
        });
        alert.present();
      }

      public  showFail() {
        let alert = this.alertCtrl.create({
          title: 'ERRADO',buttons: ['OK']
        });
        alert.present();
      }

      public  showMais() {
        let alert = this.alertCtrl.create({
          title: 'CERTO',buttons: ['OK']
        });
        alert.present();
      }

      public  showResp() {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: '<table align="center"><tr><th>-70</th><th>-110</th><th>-167</th><th>-77</th></tr>  <tr><th>19</th><th>27</th><th>29</th><th>19</th></tr> <tr><th>74</th><th>115</th><th>187</th><th>82</th></tr></table>'
          , buttons: ['OK']
        });
        alert.present();
      }


    }     



