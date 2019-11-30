import { Component, OnInit } from '@angular/core';

import {Article} from '../../models/article.model';
import {ArticleService} from '../../services/articles.service';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
	articleRocmmended:Article[] = [];
	articleCategoryA:Article[] = [];
	articles :Article[]=[];
	constructor(private articleservice:ArticleService) { 
		this.articleservice.getArticles().subscribe
			(reponse => {
				this.articles=reponse;
				this.articleRocmmended=this.articles.filter(article => article.rate > 0);
				this.articleCategoryA=this.articles.filter(article => article.category == 'A');
			}
			);
	}

	ngOnInit() {
	}

}
