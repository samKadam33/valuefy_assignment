import { IVideoList } from './../model/IVideoList';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoApiService {

  private api="https://valuefy-assignment-x.herokuapp.com/api/getVideos";
  
  constructor(private http : HttpClient) { }

  getPlayList() : Observable<IVideoList[]>{
    console.log("~~ inside getPlayList method ~~"); 
    return this.http.get<IVideoList[]>(this.api);
    }
}
