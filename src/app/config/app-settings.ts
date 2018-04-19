import { Injectable } from '@angular/core';
import {AppSettingsBase} from "../config/app-settings-base";

@Injectable()
export class AppSettings extends AppSettingsBase {
  public API_URL: string = "http://127.0.0.1:8081/lneterp/app";
  public API_GUESSLOVES_URL: string;

  constructor() {
    super();
    this.API_GUESSLOVES_URL = this.API_URL + "/app!getAppList.action";

  }
}
