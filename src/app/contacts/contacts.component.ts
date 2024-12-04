import { AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { IonicModule} from '@ionic/angular'
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { contactParticles} from 'src/assets/particles/particles';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';



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
export class ContactsComponent implements AfterViewInit, OnChanges, OnDestroy{

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private http: HttpClient
  ){
    this.formGroup = new FormGroup({
      email: new FormControl('', [ 
          Validators.required, 
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) 
        ]
      ),
      subject: new FormControl('', Validators.required), 
      content: new FormControl('', Validators.required), 
    });
  }

  @Input() trigger: boolean = false

  mailSubscription!: Subscription
  
  formGroup!: FormGroup
  id= "contactParticles"
  testParticles = contactParticles

  isTitleVisible = false
  isFormVisible = new Array(4).fill(false)
  isAnimating = false

  isEmailValid = true
  isSubjectValid = true
  isContentValid = true
  sent = false

  mailSub!: Subscription
  
    ngAfterViewInit(): void {
        this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });
  }
  

    ngOnChanges(changes: SimpleChanges){
      if(changes['trigger']){
        const isVisible = changes['trigger'].currentValue
        if (isVisible && !this.isAnimating){
          this.animate()
          setTimeout(() => {
            this.isAnimating = true
          },4000)
        }
      }
    }

    ngOnDestroy(): void {
      this.mailSub.unsubscribe()
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

  checkValidity(controlName: string): boolean {
    const control = this.formGroup.get(controlName)!;
    return control && control.valid;
  }

  onSubmit(){
    if(this.formGroup.valid){
      
      const email = this.formGroup.get('email')?.value
      const subject = this.formGroup.get('subject')?.value
      const content = this.formGroup.get('content')?.value

      this.sent = true
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


      this.mailSub = this.http.post("https://formspree.io/f/xkgngplp",
        { 
          name: email,
          message: content, 
          subject: subject 
        },
        { headers }).subscribe(()=> {
          
          this.isEmailValid = true
          this.isSubjectValid = true
          this.isContentValid = true
    
          this.formGroup.reset()
          this.sent = false
      })
    }
    else{
      this.isEmailValid = this.checkValidity('email')
      this.isSubjectValid = this.checkValidity('subject')
      this.isContentValid = this.checkValidity('content')
    }
  }

}




