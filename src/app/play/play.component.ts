import { GamesList } from './../../model/GameList.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  gameslist: GamesList[];
  
baseUrl: string='http://localhost:3000/GameList'
constructor(private http: HttpClient) { }
getEmployees(){
  return this.http.get<GamesList[]>(this.baseUrl);
}
ngOnInit() {
  this.getEmployees().subscribe((data:GamesList[])=>{this.gameslist=data;});
  }
}
