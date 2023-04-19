import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Profile } from '../models/profile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
    form!: FormGroup;
    profile!: Profile;
    imageData?: string;
    constructor(){}
    
    ngOnInit(): void {
      this.form=new FormGroup({
        name: new FormControl(null),
        image: new FormControl(null),
      });
    }
    onFileSelect(event: Event){
      const file = (event.target as HTMLInputElement).files![0];
      this.form.patchValue({image:file});
      const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
      if(file && allowedMimeTypes.includes(file.type)){
        const reader=new FileReader();
        reader.onload = () => {
          this.imageData=reader.result as string;
        }
      reader.readAsDataURL(file);
        
      }
    }

    onSubmit(){
      console.log('submit profile');
      this.form.reset();
      this.imageData='';
    }

    

}
