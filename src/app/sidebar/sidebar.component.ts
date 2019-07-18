import { Component, OnInit, HostBinding } from '@angular/core';
import $ from 'jquery'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  showIt = false;
  @HostBinding('class') classes = 'col col-xl-2 col-lg-3';
  modalTitle="Search"
  modalData=[];
  modalData1=[{
    "group":"A",
    "data":["Amsterdam","Airoli"]
  }];

  modalData2=[{
    "group":"Companies",
    "data":["Google","Facebook"]
  }];

  ngOnInit() {
  }

  showModal(flag) {
      this.modalData=flag?this.modalData1:this.modalData2;
      this.showIt = true;
  }
  hideModal(newName: string) {
      this.showIt = false;
  }

}
