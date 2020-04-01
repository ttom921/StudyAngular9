import { Component } from '@angular/core';
import { LanguageService } from './_services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestUIDashboard';
  constructor(private languageService: LanguageService) {
    this.languageService.setInitState();
    this.languageService.setCurrentLanguage();
  }
}
