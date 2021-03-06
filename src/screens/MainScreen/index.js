import React from 'react';

import NewsList from '../../Component/NewsList';

const MainScreen = ({ navigation }) => {
  const goToPost = post => {
    navigation.navigate('Post', { postId: post.id })
  }
 
  return <NewsList onOpen = {goToPost} />
}

export default MainScreen