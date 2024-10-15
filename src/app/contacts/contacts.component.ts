import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { particlesAbout } from 'src/particles';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports:[
    IonicModule, 
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    NgxParticlesModule
    ]
})
export class ContactsComponent  implements AfterViewInit{

  formGroup!: FormGroup
  id= "tsparticles"
  particlesOptions = particlesAbout
  
  constructor(private readonly ngParticlesService: NgParticlesService){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/),]),
      subject: new FormControl('', Validators.required), 
      content: new FormControl('', Validators.required), 
    });
  }

  
    ngAfterViewInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
    }

  onSubmit(){
    if(this.formGroup.valid){
      
    }
    else
    console.log('invalid items')
  }

}




