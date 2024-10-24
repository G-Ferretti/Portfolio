import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { particlesAbout } from 'src/particles';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
    NgxParticlesModule,
    CommonModule,
    TranslateModule,
    ]
})
export class ContactsComponent implements AfterViewInit, OnChanges{

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private http: HttpClient
  ){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/),]),
      subject: new FormControl('', Validators.required), 
      content: new FormControl('', Validators.required), 
    });
  }

  @Input() trigger: boolean = false
  
  formGroup!: FormGroup
  id= "tsparticles"
  particlesOptions = particlesAbout

  isTitleVisible = false
  isFormVisible = new Array(4).fill(false)
  isAnimating = false
  
    ngAfterViewInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
  }
  

    ngOnChanges(changes: SimpleChanges){
      if(changes['trigger']){
        const isVisible = changes['trigger'].currentValue
        if (isVisible && !this.isAnimating){
          this.isAnimating = true
          this.animate()
        }
      }
    }

  animate(){
      setTimeout(() => {
        this.isTitleVisible = true
      }, 300)

      setTimeout(() => {
        this.isFormVisible.forEach((_, index)=>{
          setTimeout(() => {
            this.isFormVisible[index] = true
          },700 * index)
        })
      }, 800)

  }

  onSubmit(){
    if(this.formGroup.valid){
      
      const email = this.formGroup.get('email')?.value
      const subject = this.formGroup.get('subject')?.value
      const content = this.formGroup.get('content')?.value

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post("https://formspree.io/f/xkgngplp",
        { 
          name: email,
          message: content, 
          subject: subject 
        },
        { headers }).subscribe(()=> {
          this.formGroup.reset()
      })
    }
  }

}




