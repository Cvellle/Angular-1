import { Component } from '@angular/core';
// @Directive()
// import { LoggerService } from '../services/logger-service';


@Component({
  selector: 'route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})

export class Route1 {
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
