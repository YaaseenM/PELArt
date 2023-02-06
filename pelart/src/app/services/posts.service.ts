import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/posts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseApiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseApiUrl);
  }

}
