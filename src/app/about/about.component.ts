import { Component, OnInit, AfterViewInit} from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { particlesAbout } from 'src/particles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { CommonModule } from '@angular/common';
import { AboutAnimations } from 'src/assets/animations/about';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports:[IonicModule, NgxParticlesModule, CommonModule],
  animations: [AboutAnimations]
})
export class AboutComponent implements AfterViewInit{


    constructor(private readonly ngParticlesService: NgParticlesService) {}

    id= "tsparticles"
    particlesOptions = particlesAbout

    ngAfterViewInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
    }


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
}
