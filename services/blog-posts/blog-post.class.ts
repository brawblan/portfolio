export class BlogPost {
  constructor(
    public creator: string,
    public title: string,
    public link: string,
    public pubDate: string,
    public contentEncoded: string,
    public contentEncodedSnippet: string,
    public dcCreator: string,
    public guid: string,
    public categories: Array<string>,
    public isoDate: string,
  ) { }
}