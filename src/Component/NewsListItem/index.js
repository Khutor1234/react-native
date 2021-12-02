import React, {useState} from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';

import CommentsListItem from '../CommentsListItem';
import AdminActions from '../AdminActions';
import styles from './styles';

const NewsListItem = ({post, admin}) => {
  const [visible, setVisible] = useState(false)

  const onPressHandler = () => {
    setVisible(prev => !prev)
  }

  return( 
    <View style = {styles.item}>
      { admin ? <AdminActions id = {post.id}/> : null }
      <View style = {styles.profile}>
        <Text style = {styles.email}>{post.user.username}</Text>
        <Image
            style={styles.img}
            source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'}}
          /> 
      </View>
      <View>
        <Text style = {styles.title}>{post.title}</Text>
        <Text style = {styles.body}>{post.body}</Text>
      </View>
      <Pressable style = {styles.button} onPress={onPressHandler}>
        <Text  style = {styles.text}>{visible ? 'Hide' : 'Show'} comments</Text>
      </Pressable>
      {
        visible ? 
        <FlatList 
          keyExtractor = {item => item.id.toString()}
          data = {post.comments}
          renderItem = {({item}) => <CommentsListItem comments = {item}/>}
        />
        : null
      }
    </View>
  )
}

export default NewsListItem;
