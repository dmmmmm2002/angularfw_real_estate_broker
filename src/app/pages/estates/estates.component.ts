import { Component, OnInit } from '@angular/core';
import { EstatesService } from '../../shared/services/estates.service';
import { Image } from '../../shared/models/Image';
@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss']
})
export class EstatesComponent implements OnInit{
  
  estatesObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private estatesService: EstatesService) {}

  ngOnInit(): void {
    this.estatesService.loadImageMeta('__credits.json').subscribe((data : Array<Image>) =>{
      this.estatesObject = data;
    });
  }

  loadImage(imageObject: Image){
    this.chosenImage = imageObject;
  }
}
