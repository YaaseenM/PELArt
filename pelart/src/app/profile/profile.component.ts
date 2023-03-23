import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';


interface INewsfeedItem{
  email: string
  password: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  email=''
  password=''
  public newsfeedItems: INewsfeedItem[]=[]

  constructor(
    private httpClient:HttpClient
  ){}

  ngOnInit(): void {
    this.loadNewsItems()
  }
  
  async loadNewsItems(){
    this.newsfeedItems = await lastValueFrom(this.httpClient
      .get<INewsfeedItem[]>('/api/newsfeed'))

  }

  async addPost(){
    await lastValueFrom(this.httpClient.post('/api/newsfeed', {
      email: this.email,
      password: this.password
    }))
    this.loadNewsItems()
    this.email=''
    this.password=''
  }
}
