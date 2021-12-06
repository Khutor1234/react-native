import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';

import { loadData, countViews } from '../../store/actions/index';
import NewsListItem from '../NewsListItem';
import AdminFilters from '../AdminFilters';
import styles from './styles';

const NewsList = ({posts, loadData, countViews, admin, filteredPosts, onOpen}) => {

  useEffect(() => {
    loadData()
  }, []);

  const onOpenPage = (post) => {
    onOpen(post)
    countViews(post.id)
    console.log(post,'post')
  }
 
  return(
    <View style = {admin ? styles.newsListAdmin : styles.newsList}>
      { admin ? <AdminFilters/> : null }
      <FlatList 
        keyExtractor = {item => item.id.toString()}
        data = {(filteredPosts && admin)? filteredPosts : posts}
        renderItem = {({item}) => <NewsListItem post = {item} onOpen={onOpenPage} admin={admin} />}
      />
    </View>
  )
}

const mapStateToProps = ({newsList: {posts, filteredPosts}}) => {
  return{
    posts,
    filteredPosts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: loadData(dispatch),
    countViews: (id) => dispatch(countViews(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
