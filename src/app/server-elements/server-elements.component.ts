import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None Native
})
export class ServerElementsComponent implements OnInit {

  @Input('srvElement1') element: { name: string, type: string, content: string};

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
     console.log('ngOnInit called');
  }

}
