//Add Input dependency in order to binding under .html with [Image]="image"
import { Component, OnInit, Input} from '@angular/core';
import { Image } from '../../models/image';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  	images: Image[] = [];

  constructor(private imageService:ImageService) { }

  ngOnInit() {
  	this.images = this.imageService.getImages();
  }

}
