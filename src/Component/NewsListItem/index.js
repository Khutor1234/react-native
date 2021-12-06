import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AdminActions from '../AdminActions';
import styles from './styles';

const NewsListItem = ({post, admin, onOpen}) => {
  return( 
    <TouchableOpacity onPress={() => onOpen(post)}>
      <View style = {styles.item} >
        { admin ? <AdminActions id = {post.id} post={ post }/> : null }
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
      </View>
    </TouchableOpacity>
  )
}

export default NewsListItem;
