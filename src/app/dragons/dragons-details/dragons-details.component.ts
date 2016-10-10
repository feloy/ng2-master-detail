import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Dragon, DragonsService } from '../dragons.service';
import { ComponentDeactivable } from '../../can-deactivate-guard.service';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.css']
})
export class DragonsDetailsComponent implements OnInit, ComponentDeactivable {

  details: Observable<Dragon>;
  id: number = null;
  initialdata: Dragon = null;

  form: FormGroup;
  nameCtrl: FormControl;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    public router: Router, private service: DragonsService) { }

  ngOnInit() {
    this.route.data.pluck<Dragon>('details')
      .subscribe(d => {
        this.id = d ? d.id : null;
        this.createForm(d);
      });
  }

  private createForm(data: Dragon) {
    this.initialdata = data;
    this.nameCtrl = new FormControl(data ? data.name : '', Validators.required);
    this.form = this.fb.group({
      name: this.nameCtrl
    });
  }

  doDelete() {
    if (this.id) {
      this.service.dragonDelete(this.id);
      this.form.reset();
      this.router.navigate(['/dragons']);
    }
  }

  doCancel() {
    this.form.reset();
    this.router.navigate(['/dragons']);
  }

  doReset() {
    if (this.initialdata) {
      this.form.reset(this.initialdata);
    } else {
      this.form.reset();
    }
  }

  onSubmit() {
    if (this.id) {
      this.service.dragonUpdate(this.id, this.nameCtrl.value);
    } else {
      this.id = this.service.dragonAdd(this.nameCtrl.value);
    }
    this.form.reset();
    this.router.navigate(['/dragons', { editid: this.id }]);
  }

  canDeactivate() {
    return this.form.pristine;
  }
}
