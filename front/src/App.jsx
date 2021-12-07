import { PostContainer } from 'containers/Post';

import user from 'data/userPost.json';

export const App = () => {
  return (
    <>
      <PostContainer
        name={user.name}
        location={user.location}
        avatar={user.avatar}
        text={user.text}
        stats={user.stats}
      />
    </>
  );
};
