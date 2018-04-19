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
     // var id = '1';
     // var uid = '2';
      //let body='id='+id+'&uid='+uid;
      let body ='userId=297e9e794a7a3d91014a7b788eed00a1&pageIndex=1&pageSize=10';
      return this.httpService.httpPost(url,body,'select1','select');
    }

}
