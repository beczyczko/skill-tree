import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SkillNode} from './skill-node';

@Component({
  selector: 'app-skill-node',
  templateUrl: './skill-node.component.html',
  styleUrls: ['./skill-node.component.scss']
})
export class SkillNodeComponent implements OnInit, AfterViewInit {

  @Input()
  public skillNode: SkillNode;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.skillNode);
    if (this.skillNode.parentNode) {
      const node = document.getElementById(this.skillNode.id);
      const parentNode = document.getElementById(this.skillNode.parentNode.id);
      const line = document.getElementById(`line_${this.skillNode.parentNode.id}`);

      const nodePositions = node.getBoundingClientRect();
      console.log(nodePositions);
      const parentNodePositions = parentNode.getBoundingClientRect();
      console.log(parentNodePositions);
      const linePositions = line.getBoundingClientRect();
      console.log(linePositions);
      // line.setAttribute('x1', nodePositions.x.toString());
      // line.setAttribute('y1', nodePositions.y.toString());
      // line.setAttribute('x2', parentNodePositions.x.toString());
      // line.setAttribute('y2', parentNodePositions.y.toString());
      // line.setAttribute('stroke', 'red');
      //

      const newSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      newSVG.setAttribute('width', '1600px');
      newSVG.setAttribute('height', '900px');
      newSVG.style.position = 'absolute';

      const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      newLine.setAttribute('id', `line_t_${this.skillNode.parentNode.id}`);
      newLine.setAttribute('x1', nodePositions.x.toString());
      newLine.setAttribute('y1', nodePositions.y.toString());
      newLine.setAttribute('x2', parentNodePositions.x.toString());
      newLine.setAttribute('y2', parentNodePositions.y.toString());
      newLine.setAttribute('stroke', 'red');
      newLine.setAttribute('stroke-width', '3');
      newSVG.appendChild(newLine);

      document.getElementById('lines_container').appendChild(newSVG);
    }
  }
}
