import { Component, OnInit } from '@angular/core'
import { LoginOverlayServiceService } from '../../services/login-overlay-service.service';
import { LoginOverlayRef } from '../../classes/login-overlay-ref';
import { MenuOverlayRef } from '../../classes/menu-overlay-ref';
import { MenuOverlayServiceService } from '../../services/menu-overlay-service.service';

declare var $: any

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginOverlayRef: LoginOverlayRef
  menuOverlayRef: MenuOverlayRef
  constructor(private loginOverlayService: LoginOverlayServiceService, private menuOverlayService:MenuOverlayServiceService) { }

  ngOnInit() {
  }
  openLogin() {
    // if(this.loginOverlayRef)
    this.loginOverlayRef = this.loginOverlayService.open()
    
    //remove popup after inactivity of 5 mins
    // setTimeout(() => this.loginOverlayRef.close(), 10000)
  }
  openMenu(){
    this.menuOverlayRef = this.menuOverlayService.open()
  }
}
