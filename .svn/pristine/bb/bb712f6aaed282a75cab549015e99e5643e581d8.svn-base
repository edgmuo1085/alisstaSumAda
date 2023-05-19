import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CacheService } from '../../../services/cache/cache.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {

  @Input()
  typeMenu: any;

  @Output()
  infoCommentSuccess = new EventEmitter();

  formSuccessComments: FormGroup;

  contador = 0;

  constructor(private formBuilder: FormBuilder, private router: Router, private cacheService: CacheService) { }

  ngOnInit() {
    this.createFormSuccessComments();
    const informacionVisita = this.cacheService.getSaveCommentsAdvice();

    if (Object.keys(informacionVisita).length !== 0) {
      this.formSuccessComments.patchValue({
        descriptionSuccess: informacionVisita.comment
      });
    }
  }

  createFormSuccessComments() {
    this.formSuccessComments = this.formBuilder.group({
      descriptionSuccess: ['', Validators.required]
    });

    this.formSuccessComments.controls.descriptionSuccess.valueChanges.subscribe(v => {
      const value: string = v || '';
      this.contador = value.length;
    });
  }

  next() {
    if (this.formSuccessComments.valid) {
      const infoCommentSuccess = {
        type: this.typeMenu,
        typeSelected: true,
        comment: this.formSuccessComments.controls.descriptionSuccess.value,
        redireccionar: true
      };
      this.infoCommentSuccess.emit(infoCommentSuccess);
    }
  }

}
