import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstafaceHomeComponent } from './instaface-home.component';

const routes: Routes = [{ path: '', component: InstafaceHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstafaceHomeRoutingModule { }
