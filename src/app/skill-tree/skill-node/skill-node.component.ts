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
    if (this.skillNode.parentNode) {
      const card = document.getElementById(`card_${this.skillNode.id}`);
      const parentCard = document.getElementById(`card_${this.skillNode.parentNode.id}`);

      const cardPosition = card.getBoundingClientRect();
      console.log(cardPosition);
      const parentCardPosition = parentCard.getBoundingClientRect();
      console.log(parentCardPosition);

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '1600px');
      svg.setAttribute('height', '900px');
      svg.style.position = 'absolute';

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      const lineStart = {
        x: (parentCardPosition.x + parentCardPosition.width * 0.5).toString(),
        y: (parentCardPosition.y + parentCardPosition.height).toString()
      };

      const lineEnd = {
        x: (cardPosition.x + cardPosition.width * 0.5).toString(),
        y: (cardPosition.y).toString()
      };

      line.setAttribute('id', `connection_line_${this.skillNode.parentNode.id}`);
      line.setAttribute('x1', lineStart.x);
      line.setAttribute('y1', lineStart.y);
      line.setAttribute('x2', lineEnd.x);
      line.setAttribute('y2', lineEnd.y);
      line.setAttribute('stroke', 'darkslategrey');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);

      document.getElementById('lines_container').appendChild(svg);
    }
  }
}
