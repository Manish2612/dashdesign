import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  @HostBinding('class') classes = 'col';

  ngOnInit() {
  }

}
