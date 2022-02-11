export interface IBlogDto {
  creator: string
  title: string
  link: string
  pubDate: string
  ['content:encoded']: string
  ['content:encodedSnippet']: string
  ['dc:creator']: string
  guid: string
  categories: Array<string>
  isoDate: string
}