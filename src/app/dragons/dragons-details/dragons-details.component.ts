import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Dragon, DragonsService } from '../dragons.service';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.css']
})
export class DragonsDetailsComponent implements OnInit {

  id: number = null;
  initialdata: Dragon = null;

  form: FormGroup;
  nameCtrl: FormControl;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    public router: Router, private service: DragonsService) { }

  ngOnInit() {
    this.route.data.forEach((data: { details: Dragon }) => {
      if ('details' in data) {
        this.id = data.details.id;
        this.createForm(data.details);
      } else {
        this.id = null;
        this.createForm(null);
      }
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
      this.service.dragonAdd(this.nameCtrl.value);
    }
    this.form.reset();
    this.router.navigate(['/dragons']);
  }

  canDeactivate() {
    return this.form.pristine;
  }
}
