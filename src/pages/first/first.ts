import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnswerService} from "../../providers/answer-service";

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
  providers: [AnswerService]
})
export class FirstPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private answerService:AnswerService,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }


  goUrl() {
    console.info("--1");
    this.answerService.getAnswerByUid();
  }

/*  goUrl(){
    this.answerService.getAnswerByUid().then(data => {
      console.log(data['status']);
      if (data['status'] == "1") {

      } else {
      }
    });
  }*/

}
