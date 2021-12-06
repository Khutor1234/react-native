import AsyncStorage from '@react-native-async-storage/async-storage';

const loadPosts = (items) => {
  return {
      type: 'LOADED_POSTS',
      payload: items
  };
};

const loadComments = (items) => {
  return {
      type: 'LOADED_COMMENTS',
      payload: items
  };
};

const loadUsers = (items) => {
  return {
      type: 'LOADED_USERS',
      payload: items
  };
};

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
}

export const addItem = (title, body) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      title,
      body
    }
  };
}

export const filter = (type, value) => {
  return {
    type: 'FILTER_ITEM',
    payload: {
      type, 
      value
    }
  };
}

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  }
}

export const saveChanges = (id, title, body) => {
  return {
    type: 'SAVE_CHANGES',
    payload: {
      id,
      title, 
      body
    }
  }
}

export const countViews  = (id) => {
  return {
    type: 'COUNT_VIEWS',
    payload: id
  }
}

export const loadData = (dispatch) => async() => {
  const data = await AsyncStorage.getItem('posts-store')
  const items = JSON.parse(data)
  console.log(JSON.parse(data),'AsyncStorage data')

  // if(items === null){
    const commentsData = await (await fetch('https://jsonplaceholder.typicode.com/comments/'));
    const commentsDataJson = commentsData.json()
    commentsDataJson
      .then((data) => dispatch(loadComments(data)))

    const usersData = await fetch('https://jsonplaceholder.typicode.com/users/')
    const usersDataJson = usersData.json()
    usersDataJson
      .then((data) => dispatch(loadUsers(data)))

    const postsData = await (await fetch('https://jsonplaceholder.typicode.com/posts'));
    const postsDataJson = postsData.json()
    postsDataJson
      .then((data) => dispatch(loadPosts(data)))
  // } else {
  //   dispatch(loadComments(items.newsList.comments))
  //   dispatch(loadUsers(items.newsList.users))
  //   dispatch(loadPosts(items.newsList.posts))
  // }
};
