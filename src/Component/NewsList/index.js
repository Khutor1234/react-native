import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux';

import { loadData } from '../../store/actions/index';
import NewsListItem from '../NewsListItem';
import AdminFilters from '../AdminFilters';
import styles from './styles';

const NewsList = ({posts, loadData, admin}) => {
  
  useEffect(() => {
    loadData()
  }, []);

  return(
    <View style = {styles.newsList}>
      { admin ? <AdminFilters/> : null }
      <FlatList 
        keyExtractor = {item => item.id.toString()}
        data = {posts}
        renderItem = {({item}) => <NewsListItem post = {item} admin={admin}/>}
      />
    </View>
  )
}

const mapStateToProps = ({newsList: {posts}}) => {
  return{
    posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: loadData(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
