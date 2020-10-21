import { IVideoList } from './../model/IVideoList';
import { VideoApiService } from './../service/video-api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

 constructor(private videoApiService: VideoApiService) { }
  videoList: IVideoList[]; 
  videoData: IVideoList;

  ngOnInit(): void {
    this.videoApiService.getPlayList().subscribe(
      (data: IVideoList[]) => {
        this.videoList = data;
        //console.log("videoList =>" + JSON.stringify(this.videoList));
        if(this.videoList!=undefined)
        {
          this.videoData=this.videoList[0];
        }
      },
      (error)=>{
        console.log('Error Occured : ',error);
      }
      
      );
  }
 public display(event)
 {
   //console.log(JSON.stringify(event));
   this.videoData=event;
 }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      250: {
        items: 2
      },
      500: {
        items: 3
      },
      750: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }

}
