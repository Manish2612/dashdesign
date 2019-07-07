import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarDirective } from './sidebar.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { ModalComponent } from './modal/modal.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  SidebarDirective, NavbarComponent, SidebarComponent, ContainerComponent, ModalComponent, CheckboxComponent, TagsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
