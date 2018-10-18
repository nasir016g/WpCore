import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html' 
})
export class HtmlComponent {
  @Input() html: string; 
}

  

