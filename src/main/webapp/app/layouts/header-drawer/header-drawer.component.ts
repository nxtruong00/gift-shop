import { Component, OnInit } from '@angular/core';
import {LANGUAGES} from "../../config/language.constants";
import {LoginService} from "../../login/login.service";
import {TranslateService} from "@ngx-translate/core";
import {SessionStorageService} from "ngx-webstorage";
import {AccountService} from "../../core/auth/account.service";
import {ProfileService} from "../profiles/profile.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-header-drawer',
  templateUrl: './header-drawer.component.html',
  styleUrls: ['./header-drawer.component.scss']
})
export class HeaderDrawerComponent {
  isNavbarCollapsed = true;
  languages = LANGUAGES;
  constructor( private loginService: LoginService,
               private translateService: TranslateService,
               private sessionStorageService: SessionStorageService,
               private accountService: AccountService,
               private profileService: ProfileService,
               private router: Router) { }

  // ngOnInit(): void {
  // }
  changeLanguage(languageKey: string): void {
    this.sessionStorageService.store('locale', languageKey);
    this.translateService.use(languageKey);
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

}
