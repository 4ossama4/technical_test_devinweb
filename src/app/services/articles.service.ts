import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable({
	providedIn: 'root'
})

export class ArticleService {

    private articlesData = 'assets/layout/data/articles.json';

    constructor(private http: HttpClient) { }
    
    ngOnInit() { }

    getArticles():any{
        return this.http.get(this.articlesData);
    }

}
