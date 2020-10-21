import { IVideoList } from './../model/IVideoList';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  @Input() videoData : IVideoList;
  name = "Please select a video" ;
  trailer : SafeResourceUrl=this.sanitizer.bypassSecurityTrustResourceUrl("");

  ngOnInit(): void { 
  }
  ngOnChanges(): void {
    if(this.videoData != undefined)
    {
    this.name= this.videoData.name+ " ("+this.videoData.year+")";
    this.trailer=this.sanitizer.bypassSecurityTrustResourceUrl(this.videoData.trailer);
    }
  }
}
