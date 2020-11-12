import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class HttpService{
 constructor(private http:HttpClient){}

 onSubmit(postData){
     return this.http.post('https://http-7e1d0.firebaseio.com/posts.json',postData);
 }
 onFetch(){
     return this.http.get('https://http-7e1d0.firebaseio.com/posts.json');
 }
 onDelete(){
    return this.http.delete('https://http-7e1d0.firebaseio.com/posts.json');
 }
 
}