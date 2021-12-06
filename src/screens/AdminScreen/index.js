import React from 'react';

import NewsList from '../../Component/NewsList';

const AdminScreen = ({ navigation }) => {
  const goToPost = post => {
    navigation.navigate('Post', { postId: post.id })
  }
 
  return <NewsList admin onOpen = {goToPost} />
}

export default AdminScreen