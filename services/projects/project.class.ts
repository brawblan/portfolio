export class ProjectClass {
  constructor(
    public id: number,
    public nodeId: string,
    public name: string,
    public fullName: string,
    public htmlUrl: string,
    public description: string | null,
    public cardList: Array<string>
  ) { }
}