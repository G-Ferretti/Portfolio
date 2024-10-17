import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, NgModule,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'; 
import { DeviceService } from '../service/device.service';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DropdownModule, FormsModule, SidebarModule, ButtonModule, RouterLink],
})
export class HeaderComponent implements AfterContentInit{
  constructor(
    private router: Router, 
    private deviceService: DeviceService
  ) {}

  routes: string[] =[
    'home',
    'about',
    'project',
    'contacts',
  ]

  languages = [
    { code: 'gb', name: 'English' },  
    { code: 'it', name: 'Italiano' }, 
    { code: 'es', name: 'Español' }, 
  ]
  isSidebarToggled = false;
  isMobile: Boolean = false;
  selectedLanguage: any = this.languages[0];
  selectedPage: String = 'home'

  async ngAfterContentInit() {
    this.deviceService.detectMobile().subscribe(result => {
      this.isMobile = result.matches
    })
  }

  toggleSidebar(){
    this.isSidebarToggled = !this.isSidebarToggled
  }

  changePageSidebar(route: string){
    this.router.navigate([route])
  }

  changePageSegment(event: CustomEvent): void{
    const page = event.detail.value
    this.router.navigate([page])
  }

}
