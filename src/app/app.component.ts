import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Config, IonApp, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { HomePage } from './home/home.page';
import { DeviceService } from './service/device.service';
import { Subject, Subscription } from 'rxjs';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent, HeaderComponent,
    HomePage, AboutComponent,
    ProjectComponent, ContactsComponent,
    FooterComponent
    ],
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnDestroy{
  constructor(
      private deviceService: DeviceService,
      private changeDetector: ChangeDetectorRef,
    ){} 

    @ViewChild('headerElement', {read: ElementRef}) headerRef!: ElementRef
    
    @ViewChild('home' ,{read: ElementRef}) homeRef!: ElementRef
    @ViewChild('about', {read: ElementRef}) aboutRef!: ElementRef
    @ViewChild('project', {read: ElementRef}) projectRef!: ElementRef
    @ViewChild('contacts', {read: ElementRef}) contactRef!: ElementRef

    hasChanges = false;

    intersectionObserver!: IntersectionObserver
    resizeObserver!: ResizeObserver
    serviceSubscription!: Subscription

    components: string[] = [
      'home', 'about', 'project', 'contacts'
    ]

    visibilityMap: {[key: string]: boolean} = {
      home: false,
      about: false,
      project: false,
      contacts: false
    }

    isMobile = false
    selectedSection = 'home'
    elementHeight: number = 0

    ngAfterViewInit(){
    this.serviceSubscription = this.deviceService.detectMobile().subscribe(result => {
      this.isMobile = result.matches
    })

    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const id = entry.target.id
        this.visibilityMap[id] = entry.isIntersecting
    
      })
    }, {threshold: 0.50})

    this.resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.elementHeight = entry.contentRect.height
        document.documentElement.style.setProperty('--header-height', `${this.elementHeight}px`)
      })
    })

    const observedSections = [
      this.homeRef.nativeElement,
      this.aboutRef.nativeElement,
      this.projectRef.nativeElement,
      this.contactRef.nativeElement
    ]

    observedSections.forEach(section => {this.intersectionObserver.observe(section)})
    this.resizeObserver.observe(this.headerRef.nativeElement)
    this.reloadToSection(window.location.pathname)

    this.hasChanges = true
  }

  ngAfterViewChecked(){
    if(this.hasChanges){
      this.changeDetector.detectChanges()
      this.hasChanges = false
    }
  }

  ngOnDestroy(){
    this.serviceSubscription.unsubscribe()
    this.intersectionObserver.disconnect()
    this.resizeObserver.disconnect()
  }

  reloadToSection(path: string){
    const cleanedPath: string = path.split('/').pop() || 'home'
    this.selectedSection = cleanedPath
    const element = document.getElementById(cleanedPath)
    setTimeout(() => {
      element!.scrollIntoView({behavior: 'smooth'})
    },100)
}

  scrollAndChangeUrl(sectionId: string, newUrl: string): void {
    const element = document.getElementById(sectionId)
    element!.scrollIntoView({behavior: 'smooth'})
    window.history.pushState({}, '', newUrl);
  }
}