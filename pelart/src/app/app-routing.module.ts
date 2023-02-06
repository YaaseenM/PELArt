import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddImageComponent } from './components/add-image/add-image.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addImage', component: AddImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

