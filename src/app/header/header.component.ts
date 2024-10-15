import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DropdownModule } from 'primeng/dropdown';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'; 



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
    private breakpointObserver: BreakpointObserver
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

  ngAfterContentInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
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
