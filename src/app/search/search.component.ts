import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchResult:Movie[] = [];
	search$:Subject<string>=new Subject<string>();
	fetching:boolean =false;
	search:string="";

  constructor(private moviService:MovieService) { }

  ngOnInit() {
  	this.search$
  	.debounceTime(500)
  	.map(query=>{
  		this.fetching = true;
  		return query
  	})
  	.subscribe(this.searchQuery.bind(this));
  }

  searchQuery(query:string){
  	if(query.length>0){
  	this.moviService.searchMovie(query).subscribe((results)=>{
  		this.fetching =false;
  		this.searchResult = results;
  	})
 	  	}else{
 	  		this.fetching =false;
 	  		this.searchResult = [];
 	  	}
  }

  setCurrentMovie(movie:Movie){
  	this.moviService.changeSelectedMovie(movie);
  }

}
