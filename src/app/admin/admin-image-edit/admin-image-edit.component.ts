import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';


@Component({
  selector: 'ng-admin-image-edit',
  templateUrl: './admin-image-edit.component.html',
  styleUrls: ['./admin-image-edit.component.css']
})
export class AdminImageEditComponent implements OnInit, OnDestroy {
	id: any;
	params: any;

  image = new Image('id', 'tittle', 'description', 'thumbnail', 'imagelink');
  constructor( private activatedRoute: ActivatedRoute, private imageService: ImageService ) {}

  ngOnInit() {
  	this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
  	this.imageService.getImage(this.id).subscribe(
  		data => {
  			console.log(data);
  			this.image.description = data['description'];
  			this.image.title = data['title'];
  			this.image.imagelink = data['imagelink'];
  			this.image.thumbnail = data['thumbnail'];
  			this.image.id = data['id'];
  		},
  		error => console.log(<any>error));
  }

  ngOnDestroy() {
  	this.params.unsubscribe();
  }

   updateImage(image) {
	  this.imageService.updateImage(image)
	    .subscribe(
	      image  => {
	        console.log(image);
	      },
	      error =>  console.log(<any>error));
  }
}
