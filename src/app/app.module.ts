import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarDirective } from './sidebar.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  SidebarDirective, NavbarComponent, SidebarComponent, ContainerComponent, ModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
