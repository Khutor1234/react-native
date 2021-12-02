import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { connect } from 'react-redux';

import { deleteItem } from '../../store/actions';
import styles from './styles';

const AdminActions = ({ id, deleteItem }) => {

  return (
    <View style = {styles.buttons}>
      <Pressable style = {styles.button} onPress={() => deleteItem(id)}>
        <Text style = {styles.text}>Delete</Text>
      </Pressable>
      <Pressable style = {styles.button} >
        <Text style = {styles.text}>Edit</Text>
      </Pressable>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id))
  }
}

export default connect(null, mapDispatchToProps)(AdminActions);

