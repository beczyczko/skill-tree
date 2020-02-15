export class SkillNode {
  constructor(
    public name: string,
    public description: string,
    public childNodes: Array<SkillNode>) {
  }
}
