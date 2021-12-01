
const fetchData = (items) => {
  return {
      type: 'LOADED_DATA',
      payload: items
  };
};

export const loadData = () => async(dispatch) => {
  const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsDataJson = postsData.json()
  postsDataJson
    .then((data) => dispatch(fetchData(data)))
};
