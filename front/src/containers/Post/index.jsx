import { Post } from 'components/Post'

export function PostContainer({ name, location, avatar, text, stats }) {
  const followers = `${stats.followers}`
  const views = `${stats.views}`
  const likes = `${stats.likes}`

  return (
    <Post
      name={name}
      location={location}
      avatar={avatar}
      text={text}
      followers={followers}
      views={views}
      likes={likes}
    />
  )
}
