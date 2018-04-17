import { Injectable } from '@angular/core';
import {AppSettingsBase} from "../config/app-settings-base";

@Injectable()
export class AppSettings extends AppSettingsBase {
  public API_URL: string = " http://192.168.1.54:8081/app/";
  public API_GUESSLOVES_URL: string;

  constructor() {
    super();
    this.API_GUESSLOVES_URL = this.API_URL + "mine!orderList.action";

  }
}
