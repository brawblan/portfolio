import axios from 'axios'
import { IProjectDto } from './project-dto.interface'
import { ProjectClass } from './project.class'

export default class ProjectService {
  static ProjectFromDto = (dto: IProjectDto): ProjectClass => {
    return new ProjectClass(
      dto.id,
      dto.node_id,
      dto.name,
      dto.full_name,
      dto.html_url,
      dto.description,
      dto.card_list,
    )
  }

  static getProjects = async () => {
    const url = 'https://api.github.com/users/brawblan/repos'

    try {
      const response = (await axios.get(url)).data
      console.log(response)

      return response.map((project: IProjectDto) => ProjectService.ProjectFromDto(project))
    } catch (error) {
      console.error(error)
    }
  }
}

// TODO: use this to fetch from the GitHub API once I am able to authenticate

// const [projects, setProjects] = useState<Array<ProjectClass>>([])

// const fetchBlogData = useCallback(async () => {
//   const fetchData = await ProjectService.getProjects()
//   setProjects(fetchData)
// }, [])

// useEffect(() => {
//   fetchBlogData()
//   console.log(projects)


// }, [fetchBlogData])