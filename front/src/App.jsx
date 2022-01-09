import { PostContainer } from 'containers/Post';
import { ButtonContainer } from 'containers/Header';

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
      <ButtonContainer />
    </>
  );
};
