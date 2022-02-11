import {
List,
ListItem,
SpaceProps,
Stack,
Tag
} from '@chakra-ui/react'

interface ITags {
  tags: Array<string>
  my?: SpaceProps['my']
}

const ListTag: React.FC<ITags> = (props) => {
  return (
    <Stack
      spacing={3}
      my={props.my}
    >
      {props.tags.map((tag, index) => {
        return (
          <List spacing={3}>
            <ListItem>
              <Tag
                size={'md'}
                variant="solid"
                colorScheme="green"
                key={tag + index}
              >
                {tag}
              </Tag>
            </ListItem>
          </List>
        )
      })}
    </Stack>
  )
}

export default ListTag
