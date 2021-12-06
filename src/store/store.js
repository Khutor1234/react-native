import { createStore } from "redux";
import reducer from "./reducers/index";
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(reducer);

store.subscribe(() => {
  AsyncStorage.setItem('posts-store', JSON.stringify(store.getState()))
})

// AsyncStorage.multiRemove([]).then(() => console.log('success'));
// const data = AsyncStorage.getItem('posts-store')
// console.log(data, 'mydata')

export default store;