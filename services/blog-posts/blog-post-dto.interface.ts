export interface IBlogDto {
  categories: Array<string>
  ['content:encoded']: string
  ['content:encodedSnippet']: string
  creator: string
  dc_creator: string
  description: string
  guid: string
  isoDate: string
  link: string
  pubDate: string
  title: string
}