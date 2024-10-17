import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  detectMobile(){
    return this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
  }
}
