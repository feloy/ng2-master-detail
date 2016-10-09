import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragons.service';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.css']
})
export class DragonsDetailsComponent implements OnInit {

  details: Dragon = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { details: Dragon }) => {
      if ('details' in data) {
        this.details = data.details;
      }
    });
  }

}
