import { Component, AfterViewInit, Input, OnChanges, SimpleChanges, ViewChild, OnInit} from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { NgParticlesService, NgxParticlesComponent } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { aboutParticles} from 'src/assets/particles/particles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Container, Engine } from '@tsparticles/engine';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports:[IonicModule, NgxParticlesModule, CommonModule, TranslateModule]
})
export class AboutComponent implements AfterViewInit, OnChanges{

    constructor(
      private readonly ngParticlesService: NgParticlesService) {}

    @Input() isMobile = false
    @Input() trigger: boolean = false
  
    id= "aboutParticles"
    particlesOptions = aboutParticles
    particlesContainer!: Container

    isAnimating = false;
    
    pictureVisibile = false;
    textVisible = false;
    isGridVisible = new Array(7).fill(false)

  desktopGrid: string[][] = [
    ['Angular','Typescript'],
    ['Spring' ,'Kotlin','Java'],
    ['GraphQL','MySQL']
  ]

  mobileGrid: string[][] = [
    ['Angular', 'Typescript', 'Spring'],
    ['Kotlin', 'Java', 'GraphQL','MySQL']
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

    ngAfterViewInit(){

      this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        })
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

  getFlattenedIndex(rowIndex: number, columnIndex: number, array: string[][]){
    let index = 0 
    for(let i = 0; i < rowIndex; i++){
      index += array[i].length
    }

    index ++

    return index
  }
}
