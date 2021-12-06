import React, {useState} from 'react';
import { Text, View, Pressable, Modal, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { deleteItem, saveChanges } from '../../store/actions';
import styles from './styles';

const AdminActions = ({ id, post, deleteItem, saveChanges}) => {
  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState(post.title);
  const [bodyValue, setBodyValue] = useState(post.body);

  const onSaveChanges = () => {
    saveChanges(id, titleValue, bodyValue)
    setOpen(false)
  }
  
  return (
    <View style = {styles.buttons}>
      <Pressable style = {styles.button} onPress={() => deleteItem(id)}>
        <Text style = {styles.text}>Delete</Text>
      </Pressable>
      <Pressable style = {styles.button} onPress={() => setOpen(true)}>
        <Text style = {styles.text}>Edit</Text>
      </Pressable>

      <Modal visible={open}>
        <View style = {styles.modal}>
          <Text onPress={() => setOpen(false)} style = {styles.close}>Close</Text>
          <View style = {styles.modalContent}>
            <TextInput 
              style = {styles.input}
              onChangeText = {setTitleValue} 
              value = {titleValue} />
            <TextInput 
              style = {styles.input}
              onChangeText = {setBodyValue} 
              value = {bodyValue} />

            <Pressable style = {styles.buttonSave} onPress = {onSaveChanges}>
              <Text style = {styles.text}>Save changes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    saveChanges: (id, title, body) => dispatch(saveChanges(id, title, body))
  }
}

export default connect(null, mapDispatchToProps)(AdminActions);

