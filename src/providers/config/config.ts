import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let config_key_name = "config"

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: ""

  }

  constructor() {
  }


  getConfigData(): any{
    return localStorage.getItem(config_key_name)

  }

  setConfigData(showSlide?: boolean, name?: string){
    let config = {
      showSlide: false,
      name: ""
  
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    localStorage.setItem(config_key_name , JSON.stringify(config));

  }

}
