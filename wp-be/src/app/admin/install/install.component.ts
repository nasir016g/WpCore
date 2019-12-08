import { Component, OnInit } from '@angular/core';
import { InstallService } from './install.service';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styles: []
})
export class InstallComponent implements OnInit {

  constructor(private installService: InstallService) { }

  ngOnInit() {
    this.installData();
  }

  installData() {
    this.installService.installData().subscribe(() => console.log("data installed.")
    )
  }
}
