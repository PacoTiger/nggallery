//src/services/image.services.ts
import { Injectable } from '@angular/core';
import {Image} from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ImageService {


	/*images: Image[] = [
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
				];*/
  constructor(private http:Http) { }
  	getImages(): Observable<Image[]> {
  	  return this.http.get('http://cursoangular.app/api/v1/images').map((response: Response) => response.json());
  	}

}
