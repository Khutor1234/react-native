import React from 'react';

import NewsList from '../../Component/NewsList';

const MainScreen = ({ navigation, admin }) => {
  const goToPost = post => {
    navigation.navigate('Post', { postId: post.id })
  }
 
  return <NewsList admin = {admin} onOpen = {goToPost} />
}

export default MainScreen