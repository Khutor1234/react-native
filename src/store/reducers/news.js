const updateText  = (str) => {
  if(str){
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
  }
}
const updateNewsList = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        posts: [],
        comments: [],
        users: []
      };
    }

    console.log(type, payload)

    switch (type) {
      case "LOADED_COMMENTS": 
        return {
          ...state.newsList,
          comments: payload
        }

      case "LOADED_USERS": 
        return {
          ...state.newsList,
          users: payload
        }

      case "LOADED_POSTS": 
        const updatePosts = payload.map(item => {
          const user = state.newsList.users.find(el => el.id === item.userId)
          const comments = state.newsList.comments.filter(el => el.postId === item.id)
          return{
              ...item,
              title: updateText(item.title),
              body: updateText(item.body),
              user: user,
              comments: comments
          }
        })
        return {
          ...state.newsList,
          posts: updatePosts
        }

      case 'DELETE_ITEM':
        const newItems = state.newsList.posts.filter(el => el.id !== payload)
        return {
          ...state.newsList,
          posts: newItems
        }

      default:
        return state.newsList;
    }
  };
  
  export default  updateNewsList