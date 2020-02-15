import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SkillTreeComponent} from './skill-tree.component';

const routes: Routes = [
  {
    path: '',
    component: SkillTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillTreeRoutingModule {
}
