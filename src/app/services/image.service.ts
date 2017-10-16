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
  					 'Materialize', 
  					 'CSS Framework', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png'),
				new Image ('1',
  					 'Materialize', 
  					 'CSS Framework', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png', 
  					 'https://jenniferjara.github.io/miportafolio/assets/img/iconos/Materialize.png'),
				];
  constructor() { }
  	getImages() {
  		return this.images;
  	}

}
