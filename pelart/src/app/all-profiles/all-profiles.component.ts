import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss']
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles: Profile[]=[];
  private profileSubscription!: Subscription

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.profileService.getProfiles();
    this.profileSubscription=this.profileService.getProfileStream().subscribe((profiles: Profile[])=>{
      this.profiles=profiles
    })
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}
