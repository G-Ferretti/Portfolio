import { Component, OnInit, AfterViewInit, AfterContentInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { particlesAbout } from 'src/particles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { CommonModule } from '@angular/common';
import { AboutAnimations } from 'src/assets/animations/about';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports:[IonicModule, NgxParticlesModule, CommonModule, TranslateModule],
  animations:[AboutAnimations]
})
export class AboutComponent implements AfterContentInit, OnChanges{

    constructor(
      private readonly ngParticlesService: NgParticlesService) {}

    @Input() isMobile = false
    @Input() trigger: boolean = false

    id= "tsparticles"
    particlesOptions = particlesAbout

    isAnimating = false;
    
    pictureVisibile = false;
    textVisible = false;
    isGridVisible = new Array(7).fill(false)


  techGrid: string[][] = [
    ['Angular','Typescript'],
    ['Spring' ,'Kotlin','Java'],
    ['GraphQL','MySQL']
  ]

  techIcons: { [key: string]: string } = {
    'Angular':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    'Typescript':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'Kotlin':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    'Java':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg',
    'Spring':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    'GraphQL':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    'MySQL':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg'
  }

    ngAfterContentInit(): void {
  
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['trigger']){
        const isVisible = changes['trigger'].currentValue

        if(isVisible && !this.isAnimating){
          this.isAnimating = true
          this.animate()
        }
      }
    }

  animate(){
    setTimeout(() => {
      this.pictureVisibile = true
    },200)

    setTimeout(() => {
      this.textVisible = true
    },1200)

    setTimeout(() => {
      this.isGridVisible.forEach((_, index) => {
        setTimeout(() => {
          this.isGridVisible[index] = true
        },300 * index + 1)
      })
    },1000)

    this.isAnimating = false
  }

  getFlattenedIndex(rowIndex: number, columnIndex: number){
    let index = 0 
    for(let i = 0; i < rowIndex; i++){
      index += this.techGrid[i].length
    }
    index++
    return index
  }
}
