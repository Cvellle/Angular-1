import { Component } from '@angular/core';
// @Directive()
// import { LoggerService } from '../services/logger-service';


@Component({
  selector: 'app-root',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class Child {
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
