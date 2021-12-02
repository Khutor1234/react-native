import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const CommentsListItem = ({comments}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{comments.name}</Text>
      <Text style={styles.email}>{comments.email}</Text>
      <Text style={styles.body}>{comments.body}</Text>
    </View>
  );
}


export default CommentsListItem
