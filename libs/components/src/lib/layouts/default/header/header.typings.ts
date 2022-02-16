
export class HeaderInfo {
  /**
   * 点击LOGO后跳转
   */
  homeUrl?: string;
  /**
   * LOGO
   */
  logo?: string;
  /**
   * 收起后的LOGO
   */
  miniLogo?: string;
  /**
   * 应用名称
   */
  appName?: string;

  constructor(props?: Partial<HeaderInfo>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class MenuItem {
  link!: string;
  text!: string;
}
