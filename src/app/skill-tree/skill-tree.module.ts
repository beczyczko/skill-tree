import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillTreeComponent} from './skill-tree.component';
import {SkillTreeRoutingModule} from './skill-tree-routing.module';
import {SkillNodeComponent} from './skill-node/skill-node.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [SkillTreeComponent, SkillNodeComponent],
  imports: [
    CommonModule,
    SkillTreeRoutingModule,
    MatCardModule
  ]
})
export class SkillTreeModule {
}
