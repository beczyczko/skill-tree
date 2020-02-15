import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTreeComponent } from './skill-tree.component';
import {SkillTreeRoutingModule} from './skill-tree-routing.module';

@NgModule({
  declarations: [SkillTreeComponent],
  imports: [
    CommonModule,
    SkillTreeRoutingModule
  ]
})
export class SkillTreeModule { }
