import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MdInput } from '@angular/material';

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

  @ViewChild(MdInput) getfocus: MdInput;

  details: Observable<Dragon>;
  id: number = null;
  initialdata: Dragon = null;

  form: FormGroup;
  nameCtrl: FormControl;
  reallyThirstyCtrl: FormControl;
  pleaseSave: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    public router: Router, private service: DragonsService) { }

  ngOnInit() {
    this.route.data.pluck<Dragon>('details')
      .subscribe(d => {
        this.pleaseSave = false;
        this.id = d ? d.id : null;
        if (this.form) {
          this.updateForm(d);
        } else {
          this.createForm(d);
        }
        this.getfocus.focus();
      });
  }

  private createForm(data: Dragon) {
    this.initialdata = data;
    this.nameCtrl = new FormControl(data ? data.name : '', Validators.required);
    this.reallyThirstyCtrl = new FormControl(data ? data.reallyThirsty : null, Validators.required);
    this.form = this.fb.group({
      name: this.nameCtrl,
      reallyThirsty: this.reallyThirstyCtrl
    });
  }

  private updateForm(data: Dragon) {
    this.initialdata = data;
    this.nameCtrl.setValue(data ? data.name : '');
    this.reallyThirstyCtrl.setValue(data ? data.reallyThirsty : null, Validators.required);
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
    this.createForm(this.initialdata);
    this.pleaseSave = false;
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
    let ret = this.form.pristine;
    this.pleaseSave = !ret;
    return ret;
  }
}
