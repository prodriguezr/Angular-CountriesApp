import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  @Input() placeholder:string = '';
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  query:string = '';

  debouncer:Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  onKeypress() {
    this.debouncer.next(this.query);
  } 
}
