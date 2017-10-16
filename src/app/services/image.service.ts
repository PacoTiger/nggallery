import { Injectable } from '@angular/core';
import {Image} from '../models/image';

@Injectable()
export class ImageService {
	images: Image[] = [
				new Image ('1',
  					 'Materialize', 
  					 'CSS Framework', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png'),
				new Image ('1',
  					 'Javascript', 
  					 'Programming language', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/javascript.png', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/javascript.png'),
				new Image ('1',
  					 'HTML 5', 
  					 'HyperText Markup Language', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/html.png', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/html.png'),
				];
  constructor() { }
  	getImages() {
  		return this.images;
  	}

}
