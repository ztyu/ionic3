import { Injectable } from '@angular/core';
import { HttpService } from "./http-service";
import { AppSettings } from "../app/config/app-settings";

@Injectable()
export class AnswerService {

  constructor(
    private httpService: HttpService,
    private appSettings: AppSettings) {}

  /**
      * 获取问答列表
      */
  getAnswerByUid() {
      var url = this.appSettings.API_GUESSLOVES_URL;
      let body="";
      return this.httpService.httpPost(url,body,'select1','select');
    }

}
