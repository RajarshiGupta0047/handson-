import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import {map} from 'rxjs/operators'
import { Post} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post[]=[];

  constructor(private http: HttpClient,private service:HttpService) {}

  ngOnInit() {this.onFetchPosts();}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
   
  this.service.onSubmit(postData).subscribe(response=>{ console.log(response);})
  }

  onFetchPosts() {
    // Send Http request
    this.service.onFetch()
    .pipe(map(response=>{
      const ar:Post[]=[];
      for(let key in response)
      {
        ar.push({...response[key]});

      }
      return ar;
    }))
    .subscribe(response=>{ this.loadedPosts=response;});
    console.log(this.loadedPosts);
  }

  onClearPosts() {
    // Send Http request
    this.service.onDelete().subscribe(()=>{
      
      this.loadedPosts=[];
    
    })
    
  }
}
