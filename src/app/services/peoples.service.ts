import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { People } from '../models/people.model';
@Injectable({
	providedIn: 'root'
})
export class PeoplesService {




	constructor(private http: HttpClient){}

  // get all peoples
	getPeoples(){
		return this.http.get<People[]>("https://swapi.co/api/people/");
	}
//
	getPeopleById(id:number){
		return this.http.get<People>("https://swapi.co/api/people/"+id);
	}

	 // get all films
	 getFilms(){
		return this.http.get<any[]>("https://swapi.co/api/films/");
	}

	// get all cars
	getCars(){
		return this.http.get<any[]>("https://swapi.co/api/vehicles/");
	}

}
