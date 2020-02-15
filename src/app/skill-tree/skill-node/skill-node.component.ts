import {Component, Input, OnInit} from '@angular/core';
import {SkillNode} from './skill-node';

@Component({
  selector: 'app-skill-node',
  templateUrl: './skill-node.component.html',
  styleUrls: ['./skill-node.component.scss']
})
export class SkillNodeComponent implements OnInit {

  @Input()
  public skillNode: SkillNode;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
