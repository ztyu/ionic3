import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";

@Injectable()
export class Appmethod {

  constructor(
    private toastCtrl: ToastController

  ){}

    /**
     * 弹出Toast
     */
    presentToast(info: string) {
      let toast = this.toastCtrl.create({
        message: info,
        duration: 3000
      });
      toast.present();
    }

    /**
     * 弹出可以关闭的Toast
     */
    showToastWithCloseButton(info: string) {
      const toast = this.toastCtrl.create({
        message: info,
        showCloseButton: true,
        closeButtonText: '确定'
      });
      toast.present();
    }



}
