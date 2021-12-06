import React from 'react';

import Post from '../../Component/Post'

const PostScreen = ({route}) => {
  const { postId } = route.params;

  return <Post postId={postId}/>
}

export default PostScreen;