import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import { Subscription } from 'rxjs';
import { FileUploadService } from '../services/file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss']
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles: Profile[]=[];
  private profileSubscription!: Subscription

  constructor(private fileService: FileUploadService){}

  ngOnInit(): void {
    this.fileInfos = this.fileService.getFiles();
  }
  
  fileInfos?: Observable<any>;

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}
