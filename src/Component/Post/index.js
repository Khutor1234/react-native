import React from 'react';
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';

import NewsListItem from '../NewsListItem';
import CommentsListItem from '../CommentsListItem';
import styles from './styles';

const Post = ({postId, posts}) => {
  const post = posts.find(item => item.id === postId)

  return(
    <View style = {styles.post}>
      <NewsListItem post={post}/>
      <View style = {styles.comments}>
        <FlatList 
          keyExtractor = {item => item.id.toString()}
          data = {post.comments}
          renderItem = {({item}) => <CommentsListItem comments = {item}/>}
        /> 
      </View>
    </View>
  )
}

const mapStateToProps = ({newsList: {posts}}) => {
  return{
    posts
  }
};

export default connect(mapStateToProps, null)(Post);

