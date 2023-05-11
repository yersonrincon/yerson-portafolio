import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 
  constructor(private route: Router) { }

  ngOnInit(): void {
 
  }

}
