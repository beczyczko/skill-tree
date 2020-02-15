import { Component, OnInit } from '@angular/core';
import {SkillNode} from './skill-node/skill-node';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent implements OnInit {

  public skillNode = new SkillNode(
    'Angular',
    'super skill',
    [
      new SkillNode('CSS', 'Basic', [
        new SkillNode('SCSS', '', [
          new SkillNode('mixin', '', [])
        ]),
        new SkillNode('Operators', '', []),
      ]),
      new SkillNode('HTML', 'Basic', [
        new SkillNode('Tagi', '', []),
      ]),
      new SkillNode('JS', 'Basic', [
        new SkillNode('TS', '', []),
        new SkillNode('Array methods', '', []),
        new SkillNode('Async/Await', '', []),
      ]),
    ]);

  constructor() {
    console.log('SkillTreeComponent');
  }

  ngOnInit(): void {
  }

}
