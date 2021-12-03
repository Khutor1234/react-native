
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

export const loadData = (dispatch) => async() => {
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
};
