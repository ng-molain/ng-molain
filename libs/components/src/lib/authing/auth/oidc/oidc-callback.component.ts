import {Component, OnInit} from "@angular/core";
import {OidcAuthService} from "./oidc-auth.service";
import {Router} from "@angular/router";
import {User, UserManager} from "oidc-client-ts";

interface Message {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

@Component({
  selector: 'ml-oidc-callback',
  template: `
    <nz-alert nzBanner [nzType]="message.type" [nzMessage]="message.message"></nz-alert>
  `
})
export class OidcCallbackComponent implements OnInit {

  message: Message = {
    type: "info",
    message: 'Processing login'
  };

  constructor(private oidcAuthService: OidcAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    const userManager = this.oidcAuthService.getUserManager();
    if (!userManager) {
      this.onAuthFailure('认证配置错误');
      return;
    }

    userManager.signinRedirectCallback().then(user => {
      this.onAuthSuccessful(user);
    }).catch(err => {
      this.onAuthFailure(`认证失败：${err}`, err);
    });
  }

  private onAuthSuccessful(user: User) {
    this.message = {
      type: "success",
      message: '认证成功'
    };
    // if (waitSeconds > 0)
    // interval(1000). ...

    // exec redirect to previous url or home page immediate
    // TODO use ... history previous url, 需要跳出到外部认证前记录，如果是从子应用中跳转的，需要全局约定记录方式
    this.router.navigate(['/']);
  }

  private onAuthFailure(message: string, cause?: any) {
    this.message = {
      type: 'error',
      message: message
    };

    // TODO 跳转到首页（仅当首页不要求认证时才可以跳转，否则当配置或服务有问题时会导致无限循环跳转，这样是有问题的，所以这里不直接跳转了。还有一个做法是，尝试自动调整3次，超过则停止...）
  }

}
