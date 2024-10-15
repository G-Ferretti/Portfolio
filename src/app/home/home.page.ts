import { Component, AfterViewInit,ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { ParticlesComponent } from '../particles/particles.component';
import { IonicModule } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ParticlesComponent, IonicModule],
})

export class HomePage implements AfterViewInit{

  @ViewChild('header') header!: ElementRef
  
  
  socials: [string, string, string][] = [
    [ 'https://github.com/G-Ferretti',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      'GitHub'
    ],
    [ 'https://www.linkedin.com/in/gabriele-ferretti03/',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg',
      'LinkedIn'
    ]
  ]

  animatedText: String = ''
  message: String= "Welcome to the Home Page"

  ngAfterViewInit(): void {
    const headerElement = this.header.nativeElement

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          this.textAnimation(0)
          observer.unobserve(headerElement)
          observer.disconnect
        }
      })
    })
    observer.observe(headerElement)
  }

  textAnimation(index: number){

    this.animatedText = this.message.slice(0, index) + '|'

    if(index < this.message.length){
      setTimeout(() => {
        this.animatedText = this.message.slice(0, index+1)+ '|'

        this.textAnimation(index+1)
      }, 200)
    } else {
      setTimeout(() => {
        this.animatedText = this.animatedText.slice(0, -1)
      }, 500)
    }
  }
}
