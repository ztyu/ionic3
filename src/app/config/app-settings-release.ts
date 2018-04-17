import { Injectable } from '@angular/core';

import {AppSettingsBase} from "../config/app-settings-base";

@Injectable()
export class AppSettings extends AppSettingsBase {
  constructor() {
    super();
    this.apiUrl = 'Release API';
  }
}