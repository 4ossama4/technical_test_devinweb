import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';


import { PeoplesService} from '../../services/peoples.service';
import { People} from '../../models/people.model';

@Component({
	selector: 'app-peoples',
	templateUrl: './peoples.component.html',
	styleUrls: ['./peoples.component.css']
})

export class PeoplesComponent implements OnInit {

	public peoples :People[]=[];

	constructor(private _loader: NgxSpinnerService,private _peoplesService: PeoplesService,public router: Router,) { 
		this._loader.show();
	}

	ngOnInit() {
		window.scrollTo(0, 0);

		this.getAllPeoples();

	}

	getAllPeoples(){
		this._peoplesService.getPeoples().subscribe(
			(data:any) => {
				this.peoples=data['results'];
				this._loader.hide();
			});
	}

	gotoPeaple(people){
		this.router.navigate(['/people/'+people.url[people.url.length-2]]);
	}

}
