export class BlogPost {
  constructor(
    public categories: Array<string>,
    public contentEncoded: string,
    public contentEncodedSnippet: string,
    public creator: string,
    public dcCreator: string,
    public description: string,
    public guid: string,
    public isoDate: string,
    public link: string,
    public pubDate: string,
    public title: string,
  ) { }
}