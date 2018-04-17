export class AppSettingsBase {
  public apiUrl: string;
  public rssFeedUrl: string;

  constructor() {
     this.apiUrl = '';
     this.rssFeedUrl = 'http://rssdomain.com/rss.xml';
  }
}