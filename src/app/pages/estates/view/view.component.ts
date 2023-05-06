import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Desc } from '../../../shared/models/Desc';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../../shared/models/Image';
import { EstatesService } from '../../../shared/services/estates.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder, private router: Router, private estatesService: EstatesService) { }

  descsForm = this.createForm({
    name: '',
    desc: '',
    date: new Date()
  });

  @Input() imageInput?: Image;

  loadedImage?: string;

  descs: Array<Desc> = [];


  ngOnChanges() {
    if (this.imageInput?.id) {
      this.estatesService.loadImage(this.imageInput?.id + '.jpg').subscribe((data) => {
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }
      })
    }
  }

  ngOnInit(): void {

  }

  createForm(model: Desc) {
    let formGroup = this.fb.group(model);
    formGroup.get('name')?.addValidators([Validators.required, Validators.minLength(2)]);
    formGroup.get('desc')?.addValidators([Validators.required, Validators.minLength(2)]);
    return formGroup;
  }

  addDesc() {
    if (this.descsForm.valid) {
      if (this.descsForm.get('name') && this.descsForm.get('desc')) {
        this.descsForm.get('date')?.setValue(new Date());

        this.descs.push({ ...this.descsForm.value } as Desc);

        this.router.navigateByUrl('/estates/successful/' + this.descsForm.get('name')?.value);
      }
    }
  }

}
