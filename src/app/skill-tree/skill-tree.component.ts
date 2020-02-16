import {Component, OnInit} from '@angular/core';
import {SkillNode} from './skill-node/skill-node';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent implements OnInit {

  public skillNode = new SkillNode(
    '1',
    'Angular',
    'super skill',
    [
      new SkillNode('11', 'CSS', 'Basic', [
        new SkillNode('111', 'SCSS', '', [
          new SkillNode('1111', 'mixin', '', [])
        ]),
        new SkillNode('112', 'Operators', '', []),
      ]),
      new SkillNode('12', 'HTML', 'Basic', [
        new SkillNode('121', 'Tagi', '', []),
      ]),
      new SkillNode('13', 'JS', 'Basic', [
        new SkillNode('131', 'TS', '', []),
        new SkillNode('132', 'Array methods', '', []),
        new SkillNode('133', 'Async/Await', '', []),
      ]),
    ]);

  constructor() {
    console.log('SkillTreeComponent');
  }

  ngOnInit(): void {
  }

}
