import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { particlesAbout } from 'src/particles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { DeviceService } from '../service/device.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [IonicModule, NgxParticlesModule]
})
export class ProjectComponent implements AfterContentInit{
      
    constructor(
      private readonly ngParticlesService: NgParticlesService,
      private deviceService: DeviceService) {}

    id= "tsparticles"
    particlesOptions = particlesAbout
    isMobile = false

    ngAfterContentInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });

        this.deviceService.detectMobile().subscribe(result => {
          this.isMobile = result.matches
        })
    }

  projects: [string, string, string][] = [
    [ 'Whatsapp mock (WIP)',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit congue cras dictumst, massa diam fames ligula imperdiet maecenas tristique nulla commodo mi, mollis sociis sodales sed nisi tortor montes euismod turpis. Euismod netus magna sed laoreet interdum tristique integer dis ullamcorper, cursus gravida nullam odio dapibus sem aenean. Metus eget suspendisse penatibus dignissim urna cubilia commodo, netus at morbi auctor himenaeos placerat ultricies, in a vivamus proin gravida ridiculus.', 
      'https://picsum.photos/480/270'
    ],
  ]
}
