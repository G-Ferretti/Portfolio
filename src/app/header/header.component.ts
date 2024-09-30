import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HeaderComponent {
  constructor(private router: Router) {}


  changePage(event: CustomEvent): void{
    const page = event.detail.value
    console.log(page)
    this.router.navigate([page])
  }

}
