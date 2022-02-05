export class BlogPost { 
  constructor(
    public author?: string,
    public categories?: [any],
    public content?: string,
    public description?: string,
    public enclosure?: object,
    public guid?: string,
    public link?: string,
    public pubDate?: string,
    public thumbnail?: string,
    public title?: string,
  ) {}
}