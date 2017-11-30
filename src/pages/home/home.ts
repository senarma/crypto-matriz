import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{PerguntasPage} from '../perguntas/perguntas';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 
  goToTest(){

    this.navCtrl.push(PerguntasPage);
  }

  goToIntro(){
    
        this.navCtrl.push(IntroPage);
      }

}
