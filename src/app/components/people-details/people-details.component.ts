import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from "@angular/router";

import { PeoplesService} from '../../services/peoples.service';
import { People} from '../../models/people.model';

@Component({
	selector: 'app-people-details',
	templateUrl: './people-details.component.html',
	styleUrls: ['./people-details.component.css']
})

export class PeopleDetailsComponent implements OnInit {

	public people :People;
	public films :any[]=[];
	public cars :any[]=[];

	constructor(private _loader: NgxSpinnerService,private _peoplesService: PeoplesService,private route: ActivatedRoute) { 
		this._loader.show();
	}

	ngOnInit() {
		window.scrollTo(0, 0);
		this.route.params.subscribe(params => {
			this.getPeople(params['id']);
		});
	}

	getPeople(id){
		this._peoplesService.getPeopleById(id).subscribe(
			(data:any) => {
				this.people=data;
				this.getAllFilms();
				this.getAllCars();
				
		});
	}
	getAllFilms(){
		this._peoplesService.getFilms().subscribe(
			(data:any) => {
				data['results'].forEach(element => {
					element.characters.forEach(people => {
						if(this.people.url == people){
							this.films.push(element)
						}
					});
				});
		});
	}
	getAllCars(){
		this._peoplesService.getCars().subscribe(
			(data:any) => {
				data['results'].forEach(car => {
					this.people.vehicles.forEach(vehicule => {
						if(car.url == vehicule){
							this.cars.push(car)
						}
					});
				});
				this._loader.hide();
				console.log('cars',data['results']);
			//	console.log('this.cars',this.cars)
		});
	}

}
