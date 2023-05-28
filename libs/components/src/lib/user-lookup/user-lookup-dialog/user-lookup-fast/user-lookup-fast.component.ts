import {Component, Inject, OnInit, Optional} from '@angular/core';
import {UnameFindItem, User, USER_LOADER, UserLoader} from "../../user-lookup.typings";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ml-user-lookup-fast',
  templateUrl: './user-lookup-fast.component.html',
  styleUrls: ['./user-lookup-fast.component.scss']
})
export class UserLookupFastComponent implements OnInit {

  inputCtrl = new FormControl();
  verifyLoading = false;

  usernameVerifiedResults: UnameFindItem[] = [];
  usernameVerifiedSuccess: UnameFindItem[] = [];
  usernameVerifiedError: UnameFindItem[] = [];

  constructor(@Optional() @Inject(USER_LOADER) private userLoader: UserLoader) { }

  ngOnInit() {
  }

  getSelected(): User[] {
    return this.usernameVerifiedSuccess.map(it => it.userInfo);
  }

  verifyUsernames() {
    const inputUsernames = this.inputCtrl.value as string;
    if (!inputUsernames || inputUsernames.length === 0) {
      return ;
    }
    const usernames = inputUsernames.split(/,|;|:|，|；|：|\n/)
      .map((it: string) => it.trim()).filter((it: string) => it.length > 0);
    if (usernames.length === 0) {
      return;
    }

    this.verifyLoading = true;
    this.userLoader.unameFind(usernames).subscribe({
      next: result => {
        this.verifyLoading = false;

        this.usernameVerifiedResults = result;
        this.usernameVerifiedSuccess = result.filter(it => it.result == 'OK');
        this.usernameVerifiedError = result.filter(it => it.result != 'OK');
      },
      error: err => {
        this.verifyLoading = false;
      }
    })
  }
}
