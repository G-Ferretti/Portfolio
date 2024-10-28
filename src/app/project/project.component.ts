import { AfterContentInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { projectParticles } from 'src/assets/particles/particles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [IonicModule, NgxParticlesModule, CommonModule, TranslateModule]
})
export class ProjectComponent implements AfterContentInit, OnChanges{
      
    constructor(
      private readonly ngParticlesService: NgParticlesService,
    ) {}

    @Input() isMobile: boolean = false
    @Input() trigger: boolean = false


    projects: [string, string][] = [
      [ 
        'assets/images/WIP.jpg',
        'Nothing to see here, move on :/'
      ],
    ]

    isAnimating = false
    isHeaderVisible = false
    isParagraphVisible = false
    isProjectVisible = new Array(1).fill(false)

    id= "projectParticles"
    particlesOptions = projectParticles

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['trigger']){
        const isVisible = changes['trigger'].currentValue
        if(isVisible && !this.isAnimating){
          this.isAnimating = true
          this.animate()
        }
      }
    }
  
    ngAfterContentInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
    }

    animate(){
      setTimeout(() => {
        this.isHeaderVisible = true
      }, 200)

      setTimeout(() => {
        this.isParagraphVisible = true
      },700)

      setTimeout(() => {
        this.isProjectVisible.forEach((_, index) => {
          setTimeout(() => {
            this.isProjectVisible[index] = true
          },300 * index + 1)
        })
      }, 1200)

      this.isAnimating = false
    }

}
