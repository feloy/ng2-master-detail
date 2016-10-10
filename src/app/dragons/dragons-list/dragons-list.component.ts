import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragons.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {

  list: Observable<Dragon[]>;
  private editid: Observable<number>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.route.data.pluck<Dragon[]>('list');
    this.editid = this.route.params.pluck<number>('editid');
  }
}
