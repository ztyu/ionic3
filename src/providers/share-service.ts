export class ShareService {

  public isLogin: boolean = false;
  public isLoginOut: boolean = false;
  public AUTH: string; //用户AUTH
  public CENTER_ID: string;   //用户CENTER_ID
  public Uid: string;   //用户id
  public Username: string;   //用户名
  public Token: string;  //令牌
  public Mobile: string;   //手机号
  public HeadImg: string; //用户头像
  //专业人士代码对应关系
  public specCodeTable = ['非专业人士', '专业人士(未认证)', '专业人士(已认证)'];
  public specCode: number = 0;
  //不用GPS， HTML 的定位, IP 位置 当前城市存储
  public localCity = {name: '青岛', code: '370200'};
  public growthVal: number;  //统计成长值
  public industry = '0'; //行业类别
  //类型 新闻1 标讯2 交易3
  public type_news:boolean = false;
  public type_bid:boolean = false;
  public type_trade:boolean = false;
  //定制地区
  public industryCity= {name: '青岛', code: '370200'};
  constructor() {

  }
}
