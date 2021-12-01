const updateNewsList = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        data: [],
      };
    }

    console.log(type, payload)

    switch (type) {
      case "LOADED_DATA": 
        console.log(payload)
        return {
          data: payload
        }

      default:
        return state.newsList;
    }
  };
  
  export default  updateNewsList