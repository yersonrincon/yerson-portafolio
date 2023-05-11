import { Component } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yerson-portafolio';
  constructor(private spinner: NgxSpinnerService,) 
  {
  
  }
    ngOnInit(){
      this.spinner.show();
  
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
    }
  }
  
