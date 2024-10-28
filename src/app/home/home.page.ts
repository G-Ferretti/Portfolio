import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { loadSlim } from '@tsparticles/slim';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TextAnimationService } from '../service/textAnimation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxParticlesModule } from "@tsparticles/angular";
import { NgParticlesService } from '@tsparticles/angular';
import { homeParticles, } from 'src/assets/particles/particles';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, NgxParticlesModule],
})

export class HomePage implements AfterViewInit, OnChanges , OnDestroy{

  constructor(
    private translate: TranslateService,
    private textAnimation: TextAnimationService,
    private readonly ngParticlesService: NgParticlesService
    ){}

  id= "homeParticles"
  particleOptions = homeParticles

  @Input() trigger!: boolean

  animatedStatic: string = ''
  animatedCycling: string = ''

  message: string = "Hello I'm Gabriele"
  cyclingMessages: string[] = [
    'Front-end developer', 'Back-end developer', 'Music enthusiast'
  ]

  staticAnimationSub!: Subscription
  cyclingAnimationSub!: Subscription

  isAnimating: boolean = false

  isDownloadVisible: boolean = false
  isButtonVisibile = new Array(2).fill(false)
  
  socials: [string, string, string][] = [

      //page url
      //icon url
      //alt text

    [ 'https://github.com/G-Ferretti', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      'GitHub'
    ],
    [ 'https://www.linkedin.com/in/gabriele-ferretti03/',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg',
      'LinkedIn'
    ]
  ]

  ngAfterViewInit(){

    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);  
    })
    
    this.animateText(this.message, this.cyclingMessages)
    
    this.staticAnimationSub = this.textAnimation.getAnimatedStaticMessage().subscribe(event => {
      this.animatedStatic = event
    })

    this.cyclingAnimationSub = this.textAnimation.getAnimatedCyclingMessage().subscribe(event => {
      this.animatedCycling = event
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['trigger']){
      const isVisible = changes['trigger'].currentValue
      if (isVisible && !this.isAnimating){
        this.animateContent()
        setTimeout(() => {
          this.isAnimating = true
        }, 2000)
      }
    }
  }

  ngOnDestroy(): void {
    this.staticAnimationSub.unsubscribe()
    this.cyclingAnimationSub.unsubscribe()
  }

  animateText(staticMsg: string, cyclingMsg: string[]){
    this.textAnimation.startStaticAnimation(staticMsg)
    
    setTimeout(()=> {
      this.textAnimation.startCyclingAnimation(cyclingMsg)
    }, 4500)
  }

  animateContent(){
    setTimeout(() => {
      this.isDownloadVisible = true
    }, 500)

    setTimeout(() => {
      this.isButtonVisibile.forEach((_, index) => {
        setTimeout(() => {
          this.isButtonVisibile[index] = true
        },500 * index)
      })
    },800)
  }
}
