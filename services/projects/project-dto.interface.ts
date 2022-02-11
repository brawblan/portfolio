export interface IProjectDto {
  id: number
  node_id: string
  name: string
  full_name: string
  html_url: string
  description: string | null
  card_list: Array<string>
}