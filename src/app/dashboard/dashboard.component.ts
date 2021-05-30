import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';
import * as fromCounter from '../store/reducers';

// @Directive()
// import { LoggerService } from '../services/logger-service';

export interface State {
  home: number;
  away: number;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class Dashboard {
  private id = 4;
  counter: Observable<number>;

  constructor(private store: Store<State>) {
    this.counter = this.store.select(fromStore.counter);
  }



  // constructor(private logger: LoggerService) { }

  title = this.id;

  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    console.log(`${msg}`);

  }
}
