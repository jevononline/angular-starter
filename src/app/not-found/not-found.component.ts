import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: 'not-found.component.html',
})

export class NotFoundComponent implements OnInit {
  ngOnInit() {
    console.log('Not found.');
  }
}
