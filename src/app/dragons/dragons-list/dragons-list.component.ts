import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragons.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {

  list: Dragon[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { list: Dragon[] }) => {
      if ('list' in data) {
        this.list = data.list;
      }
    });
  }

}
