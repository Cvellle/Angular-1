import { Component } from '@angular/core';
import { Child } from './child/child.component';

// @Directive()
// import { LoggerService } from '../services/logger-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private id = 4;

  // constructor(private logger: LoggerService) { }

  title = this.id;

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    console.log(`${msg}`);

  }
}
