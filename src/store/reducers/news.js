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
        const myTestItem = {
          userId: 222,
          id: 222,
          title: "Test",
          body: "Test",
          user: {
            id: 1,
            name: "Alexandra Graham",
            username: "Alexandra",
            email: "Alexandra@april.biz"
          },
          comments: [
            {
              postId: 222,
              id: 1,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 2,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 3,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 4,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 5,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 6,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
            {
              postId: 222,
              id: 7,
              name: "Test",
              email: "Test@alysha.tv",
              body: "Test"
            },
          ]
        }
        return {
          ...state.newsList,
          posts: [
            ...updatePosts,
            myTestItem
          ]
        }

      case 'DELETE_ITEM':
        const newItems = state.newsList.posts.filter(el => el.id !== payload)
        return {
          ...state.newsList,
          posts: newItems
        }

      case 'ADD_ITEM':
        console.log(payload, 'pa')
        const newPost = {
          id: Date.now(),
          title: payload.title,
          body: payload.body,
          userId: 333,
          user: {
            email: "Admin@kory.org",
            id: 333,
            name: "Patricia Lebsack",
            username: "Admin",
          },
          comments: []
        }
        return {
          ...state.newsList,
          filteredPosts: null,
          posts: [
            newPost,
            ...state.newsList.posts,
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
          news: state.newsList.posts.sort((a, b) => a.id - b.id)
        }

      case 'SAVE_CHANGES': 
      console.log(payload)
      const indexPost = state.newsList.posts.findIndex(item => item.id === payload.id);
      console.log(indexPost, 'index')
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

      default:
        return state.newsList;
    }
  };
  
  export default  updateNewsList