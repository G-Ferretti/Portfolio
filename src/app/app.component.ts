import { Component, OnInit} from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, RouterOutlet,IonContent, HeaderComponent],
})
export class AppComponent implements OnInit{
  constructor(private breakpointObserver: BreakpointObserver){}

  isMobile: boolean = false 

  ngOnInit(){
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches
    })
  }
}