import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DropdownModule, FormsModule, SidebarModule, ButtonModule, TranslateModule],
})
export class HeaderComponent{
  constructor(
    private translate: TranslateService
    ) {
      translate.addLangs(['en', 'es', 'it'])
      translate.setDefaultLang('en')
      
      const browserLang = translate.getBrowserLang()
      let langEntry: number

      switch(browserLang){
        case undefined: 
        case 'en':
          langEntry = 0
          break
        case 'it':
          langEntry = 1
          break
        case 'es':
          langEntry = 2
          break
        default:
          langEntry = 0 
      }
      
      this.selectedLanguage = this.languages[langEntry]
      translate.use(this.languages[langEntry].langCode)
    }

  logo = '</>'

  routes: string[] =[
    "home",
    "about",
    "project",
    "contacts",
  ]

  languages = [
    {flagCode: 'gb', langCode: 'en'},
    {flagCode: 'it', langCode: 'it'},
    {flagCode: 'es', langCode: 'es'}
  ]

  isSidebarToggled = false;
  selectedLanguage: {flagCode: string, langCode: string}
  
  @Output() changedSection = new EventEmitter<{sectionUrl: string, sectionName: string}>
  @Input() isMobile!: boolean
  @Input() selectedPage!: String

  scrollToSection(sectionName: string, sectionUrl: string){
    this.changedSection.emit({sectionUrl, sectionName})
    this.selectedPage = sectionName
  }

  toggleSidebar(){
    this.isSidebarToggled = !this.isSidebarToggled
  }

  switchLanguage(language: string){
    this.translate.use(language)
  }
}
