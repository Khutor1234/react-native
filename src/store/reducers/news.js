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

    console.log(type, state)

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
          posts: updatePosts.sort((a, b) => a.id - b.id)
        }

      case 'DELETE_ITEM':
        const newItems = state.newsList.posts.filter(el => el.id !== payload)
        return {
          ...state.newsList,
          posts: newItems
        }

      case 'ADD_ITEM':
        const newPost = {
          id: Date.now(),
          title: payload.title,
          body: payload.body,
          userId: 333,
          user: {
            username: "Admin",
            email: "Admin@kory.org",
            id: 333,
            name: "Patricia Lebsack",
          },
          comments: []
        }
        return {
          ...state.newsList,
          filteredPosts: null,
          posts: [
            ...state.newsList.posts,
            newPost
          ]
        }

      case 'FILTER_ITEM': 
        let filteredPosts
        if(payload.type === 'comments'){
          filteredPosts = state.newsList.posts.sort((a,b) => b.comments.length - a.comments.length)
        }
        if(payload.type === 'user'){
          filteredPosts = state.newsList.posts.filter(item => item.userId == payload.value)
        }
        if(payload.type === 'views'){
          filteredPosts = state.newsList.posts.sort((a,b) => b.views - a.views)
        }
        if(payload.type === 'resent'){
          const filtered = state.newsList.posts.sort((a, b) => b.id - a.id)
          filteredPosts = filtered.slice(0, payload.value)
        }
        console.log(filteredPosts, 'filter')
        return {
          ...state.newsList,
          filteredPosts: filteredPosts
        }

      case 'RESET_FILTER': 
        return {
          ...state.newsList,
          filteredPosts: null,
          posts: state.newsList.posts.sort((a, b) => a.id - b.id)
        }

      case 'SAVE_CHANGES': 
      const indexPost = state.newsList.posts.findIndex(item => item.id === payload.id);
      return {
        ...state.newsList,
        filteredNews: null,
        posts: [
            ...state.newsList.posts.slice(0, indexPost),
           {
            ...state.newsList.posts[indexPost],
            title: payload.title,
            body: payload.body
           },
            ...state.newsList.posts.slice(indexPost + 1)
        ]
      }

      case 'COUNT_VIEWS': 
        const updateData = state.newsList.posts.map((item)=> {
          if(item.id === payload) {
            const count = item.views ? item.views : 0
            return {
              ...item,
              views: count + 1
            }
          }
          return item
        })
        return {
          ...state.newsList,
          posts: updateData
        }

      default:
        return state.newsList;
    }
  };
  
  export default  updateNewsList