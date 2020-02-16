export class SkillNode {
  public parentNode: SkillNode;

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public childNodes: Array<SkillNode>) {
    childNodes.forEach(n => n.parentNode = this);
  }
}
