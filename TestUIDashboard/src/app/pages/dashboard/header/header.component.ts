import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from 'src/app/_services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  //#region 多國語言相關
  //語言有改變時通知
  @Output() langChange = new EventEmitter<string>();
  langselected = "en";
  langslist = [];
  //#endregion //多國語言相關
  user_id = "元件測試";
  constructor(
    private languageService: LanguageService
  ) {
    //取得語言列表
    this.processLanguageList();
  }

  ngOnInit(): void {
  }
  onClick() {
    this.toggle.emit();
  }
  //#region 多國語言相關
  selectChange(ev) {
    //console.log(ev);
    this.languageService.selectLanguage(ev.value);
    this.langChange.emit(ev.value);
  }
  // useLanguage(language) {
  //   this.languageService.selectLanguage(language);
  // }
  processLanguageList() {
    this.languageService.translate.get('menu.languageList').subscribe(value => {
      console.log(value);
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          let element = null;
          let langitem = null;
          switch (key) {
            case "taiwan":
              // element = value[key];
              // console.log(element);
              langitem = {
                "lang": "zh-tw",
                "lenum": key,
                "name": value[key]
              }
              break;
            case "english":
              langitem = {
                "lang": "en",
                "lenum": key,
                "name": value[key]
              }
              break;
            case "japan":
              langitem = {
                "lang": "ja",
                "lenum": key,
                "name": value[key]
              }
              break;
          }
          this.langslist.push(langitem);
        }
      }
    });
    //console.log(this.languageService.translate.currentLang);
    this.langselected = this.languageService.translate.currentLang;
    //console.log(this.langselected);
  }
  //#endregion 多國語言相關
}
